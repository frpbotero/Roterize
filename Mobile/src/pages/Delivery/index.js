import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Api, { apiService } from "../../services/Api";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import SignatureScreen from "react-native-signature-canvas";

export function Delivery({ text }) {
  const navigation = useNavigation();
  const route = useRoute();
  const deliveryID = route.params;
  const [delivery, setDelivery] = useState();
  const [signature, setSignature] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    async function fetchDelivery() {
      await apiService.delivery
        .readById(deliveryID.deliveryID)
        .then((response) => setDelivery(response.data))
        .catch((error) => console.log(error));
    }
    fetchDelivery();
  }, [deliveryID]);

  function clearSignature() {
    ref.current?.clearSignature();
    setSignature(null);
  }

  // function saveSignature() {
  //   setSignature(ref.current.toDataURL());

  // }

  async function updateDelivery() {
    const payload = {
      status: "Entregue",
      signature: signature,
    };

    await apiService.delivery
      .updateURL(deliveryID.deliveryID, payload)
      .then((response) => alert(response.data.message))
      .catch((erro) => console.log(erro));

    // Navegar para a tela de entrega
    navigation.navigate("Deliveries");
  }

  if (!delivery) {
    return (
      <View style={styles.loading}>
        <Image
          style={styles.imageLoading}
          source={require("../../../assets/loading.gif")}
        />
      </View>
    );
  }
  // Called after ref.current.readSignature() reads a non-empty base64 string
  function saveSignature(signature) {
    setSignature(signature);
    // onOK(signature); // Callback from Component props
  }

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhe de pedido</Text>
      <View>
        <Text>Cliente: {delivery.client.name}</Text>
        <Text>
          Endereço:{" "}
          {`${delivery.client.address}, ${delivery.client.number} - ${delivery.client.district}`}
        </Text>
        <Text>Descrição: {delivery.descriptionDelivery}</Text>
        <View>
          <Text>Itens:</Text>
          {delivery.deliveryList.map((items, index) => (
            <Text key={`${items}${index}`}>
              {items.product} - {items.qtd}
            </Text>
          ))}
        </View>
      </View>
      <View>
        <View style={styles.signatureContainer}>
          <SignatureScreen
            ref={ref}
            onEnd={handleEnd}
            onGetData={handleData}
            onOK={saveSignature}
            autoClear={false}
            descriptionText={text}
          />
          <View>
            {/* <TouchableOpacity onPress={saveSignature}>
              <Text>Assinar</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={clearSignature}>
              <Text>Limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {!signature ? (
            <Text></Text>
          ) : (
            <Image
              resizeMode={"cover"}
              style={{ width: 300, height: 300, padding: 10 }}
              source={{ uri: signature }}
            />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={updateDelivery}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  signatureContainer: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    height: 150,
  },
  signatureCanvas: {
    width: 300,
    height: 200,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  previewContainer: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    height: 150,
  },
});

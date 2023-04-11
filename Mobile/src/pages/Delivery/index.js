import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";
import SignatureCanvas from "react-native-signature-canvas";

export function OrderID() {
  const id = localStorage.getItem("idDelivery");
  const [delivery, setDelivery] = useState();
  const [signature, setSignature] = useState(null);
  const signatureRef = useRef(null);

  useEffect(() => {
    async function fetchDelivery() {
      const response = await apiService.delivery.readById(id);
      setDelivery(response.data);
    }
    fetchDelivery();
  }, [id]);

  function clearSignature() {
    signatureRef.current?.clearSignature();
    setSignature(null);
  }

  function saveSignature() {
    setSignature(signatureRef.current?.toDataURL());
  }

  function updateDelivery() {
    const payload = {
      status: "Entregue",
      signature: signature,
    };

    apiService.delivery.updateURL(id, payload);

    // Navegar para a tela de entrega
  }

  if (!delivery) {
    return <Text>Loading...</Text>;
  }

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
          <SignatureCanvas
            ref={signatureRef}
            strokeColor="#000"
            strokeWidth={3}
            canvasStyle={styles.signatureCanvas}
            onClear={clearSignature}
          />
          <TouchableOpacity style={styles.button} onPress={clearSignature}>
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={saveSignature}>
            <Text style={styles.buttonText}>Assinar</Text>
          </TouchableOpacity>
        </View>
        {signature && (
          <View style={styles.signatureContainer}>
            <Image source={{ uri: signature }} style={styles.signatureImage} />
            <Text>Responsável</Text>
          </View>
        )}
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  signatureContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  signatureCanvas: {
    width: 13,
  },
});

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Card({ name, address, deliveryList, status, _id }) {
  const navigation = useNavigation();
  function OpenNewPage() {
    navigation.navigate("Delivery", { deliveryID: _id });
  }
  function InfoStatus() {
    alert("Pedido já entregue!");
  }

  return (
    <View
      style={
        status === "EmRota" ? styles.containerEmRota : styles.containerEntregue
      }>
      <View style={styles.headCard}>
        {status === "EmRota" ? (
          <TouchableOpacity onPress={OpenNewPage}>
            <Text>{name}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={InfoStatus}>
            <Text>{name}</Text>
          </TouchableOpacity>
        )}
        <View style={styles.qtdDelivery}>
          <Feather name="box" size={27} color="#000" />
          <Text>{deliveryList}</Text>
        </View>
      </View>
      <Text>{address}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  containerEmRota: {
    backgroundColor: "#addcda",

    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  containerEntregue: {
    backgroundColor: "#737374",
    marginTop: 10,
    marginHorizontal: 20,
    opacity: 0.5,
    padding: 10,
    borderRadius: 10,
  },
  headCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  qtdDelivery: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Card({ name, address, deliveryList, status, _id }) {
  const navigation = useNavigation();
  function OpenNewPage() {
    navigation.navigate("Delivery", { deliveryID: _id });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headCard}>
        <TouchableOpacity onPress={OpenNewPage}>
          <Text>{name}</Text>
        </TouchableOpacity>
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
  container: {
    backgroundColor: "gray",
    marginTop: 10,
    marginHorizontal: 20,
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

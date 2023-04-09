import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.headCard}>
        <Text>Açucar ME</Text>
        <View style={styles.qtdDelivery}>
          <Feather name="box" size={27} color="#000" />
          <Text>3</Text>
        </View>
      </View>
      <Text>Rua Castanho Moraes, 9999 - Jornalista</Text>
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

import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Deliveries() {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Card />
        <Card />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
});

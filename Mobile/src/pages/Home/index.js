import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
});

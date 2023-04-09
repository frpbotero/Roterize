import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image
          style={styles.imageHome}
          source={require("../../assets/deliveryHome.png")}
        />
        <Text style={styles.welcome}>Levando seu pedido até você!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  content: {
    marginTop: 120,
    alignItems: "center",
    flexDirection: "column",
  },
  welcome: {
    fontSize: 20,
  },
  imageHome: {
    width: 250,
    height: 250,
  },
});

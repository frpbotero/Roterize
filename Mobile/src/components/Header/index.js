import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

function onPress() {
  console.log("hello");
}

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../../assets/router.png")}
      />
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingTop: statusBarHeight,
    paddingHorizontal: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#fff",
    borderColor: "rgb(221, 87, 87)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "rgb(221, 87, 87)",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

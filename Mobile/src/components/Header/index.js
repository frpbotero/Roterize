import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

function onPress() {
  console.log("hello");
}

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(!open);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../../../assets/router.png")}
      />
      <TouchableOpacity onPress={handleModal}>
        <Text>Data</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.viewCentered}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={handleModal}>
              <Text>X</Text>
            </TouchableOpacity>
            <DatePicker
              format="DD/MM/YYYY"
              style={styles.dateComponent}
              date={this.state.data}
            />
          </View>
        </View>
      </Modal>

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
    paddingHorizontal: 10,
    alignItems: "center",
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
    elevation: 5,
    backgroundColor: "#fff",
    borderColor: "1px solid rgb(221, 87, 87)",
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
  dateComponent: {
    width: 250,
  },
  viewCentered: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

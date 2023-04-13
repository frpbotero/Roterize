import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { apiService } from "../../services/Api";
import { useState, useEffect } from "react";

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState();
  async function GetDeliveries() {
    apiService.delivery
      .readAllURL()
      .then((response) => setDeliveries(response.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    GetDeliveries();
  }, [deliveries]);

  return (
    <View style={styles.container}>
      <Header />
      <View>
        {!deliveries ? (
          <View style={styles.loading}>
            <Image
              style={styles.imageLoading}
              source={require("../../../assets/loading.gif")}
            />
          </View>
        ) : (
          deliveries.map((order, index) => (
            <Card
              key={`${order}${index}`}
              name={order.client.name}
              address={`${order.client.address},${order.client.number} - ${order.client.district} `}
              deliveryList={order.deliveryList.length}
              status={order.status}
              _id={order._id}
            />
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  loading: {
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  imageLoading: {
    marginTop: 50,
  },
});

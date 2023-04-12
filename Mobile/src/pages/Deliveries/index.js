import { StyleSheet, Text, View } from "react-native";
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
    console.log(deliveries);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View>
        {!deliveries ? (
          <Text>Carregando...</Text>
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
});

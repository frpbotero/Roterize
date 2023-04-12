import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Api from "../../services/Api";
import { useState, useEffect } from "react";

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState();
  async function GetDeliveries() {
    Api.get("/delivery")
      .then((response) => setDeliveries(response.data))
      .catch((error) => console.log(error));

    console.log(deliveries);
  }

  useEffect(() => {
    GetDeliveries();
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

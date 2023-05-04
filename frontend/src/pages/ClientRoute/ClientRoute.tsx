import { useContext, useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import { Card } from "../../components/Card/Card";
import { deliveryType } from "../../types/types";
import loading from "../../assets/loading.gif";
import "./styles.css";
import { dateContext } from "../../context/DateContext";

export function ClientRoute() {
  const [delivery, setDelivery] = useState<deliveryType[]>([]);
  const { date } = useContext(dateContext);
  async function showDeliveries() {
    await apiService.delivery
      .readAllURL()
      .then((response: any) => {
        const sortedDelivery = response.data.sort(
          (a: deliveryType, b: deliveryType) => {
            if (a.status === "EmRota" && b.status !== "EmRota") {
              return -1;
            } else if (a.status !== "Entregue" && b.status === "Entregue") {
              return -1;
            }
            return 0;
          }
        );
        setDelivery(sortedDelivery);
      })

      .catch((e: Error) => {
        console.log(e);
      });
  }

  useEffect(() => {
    showDeliveries();
  }, []);

  return (
    <div className="routerContainer">
      <h1>Delivery</h1>
      {!delivery ? (
        <img src={loading} />
      ) : (
        delivery.map((order, index) => (
          <div key={`${order}${index}`}>
            <Card
              address={`${order.client.address},${order.client.number} - ${order.client.district} `}
              name={order.client.name}
              refreshCard="/destiny"
              id={order._id}
              deliveryList={order.deliveryList.length}
              status={order.status}
            />
          </div>
        ))
      )}
    </div>
  );
}

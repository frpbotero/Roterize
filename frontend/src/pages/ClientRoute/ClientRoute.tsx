import { useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import { Card } from "../../components/Card/Card";
import { deliveryType } from "../../types/types";
import "./styles.css";

export function ClientRoute() {
  const [delivery, setDelivery] = useState<deliveryType[]>([]);

  async function showDeliveries() {
    await apiService.delivery
      .readAllURL()
      .then((response: any) => {
        setDelivery(response.data);
      })

      .catch((e: Error) => {
        console.log(e);
      });
  }

  useEffect(() => {
    showDeliveries();
  }, []);
  console.log(delivery);
  return (
    <div className="routerContainer">
      <h1>Delivery</h1>
      {!delivery
        ? ""
        : delivery.map((order, index) => (
            <div key={`${order}${index}`}>
              <Card
                address={`${order.client.address},${order.client.number} - ${order.client.district} `}
                name={order.client.name}
                refreshCard={showDeliveries}
                id={order._id}
                deliveryList={order.deliveryList.length}
                status={order.status}
              />
            </div>
          ))}
    </div>
  );
}

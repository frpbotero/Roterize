import { useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import { Card } from "../../components/Card/Card";
import { clientsType, deliveryType } from "../../types/types";

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
    <div>
      <h1>Delivery</h1>
      {!delivery
        ? ""
        : delivery.map((order, index) => (
            <div key={`${order}${index}`}>
              <Card
                address={order.client.address}
                name={order.client.name}
                refreshCard={showDeliveries}
                id={order._id}
              />
            </div>
          ))}
    </div>
  );
}

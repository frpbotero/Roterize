import { useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";

type OrderIDProps = {
  id: string;
};

export function OrderID(props: OrderIDProps) {
  const { id } = props.params;
  const [delivery, setDelivery] = useState<deliveryType>();

  useEffect(() => {
    async function fetchDelivery() {
      const response = await apiService.delivery.readById(id);
      setDelivery(response.data);
    }
    fetchDelivery();
  }, [id]);

  if (!delivery) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detalhe de pedido</h1>
      <p>Nome: {delivery.client.name}</p>
      <p>Endereço: {delivery.client.address}</p>
      <p>Descrição: {delivery.descriptionDelivery}</p>
      <ul>
        {delivery.delivery.map((items: any) => (
          <li>
            {items.product} - {items.qtd}
          </li>
        ))}
      </ul>
    </div>
  );
}

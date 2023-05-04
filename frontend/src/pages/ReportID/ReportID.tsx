import { useEffect, useState, useRef, useContext } from "react";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";
import carregando from "../../assets/carregando.gif";
import "./ReportID.css";
import { generatePDF } from "../../utils/pdfCreate";

export function ReportID() {
  const id = localStorage.getItem("idDelivery");
  const [delivery, setDelivery] = useState<any>();

  useEffect(() => {
    async function fetchDelivery() {
      const response = await apiService.delivery.readById(id);
      setDelivery(response.data);
    }
    fetchDelivery();
  }, [id]);

  console.log(delivery);
  if (!delivery) {
    return (
      <div>
        <img src={carregando} alt="" />
        <p>Carregando...</p>
      </div>
    );
  }
  function createPDF() {
    if (delivery) {
      generatePDF(delivery);
    } else {
      console.log("Error");
    }
  }

  return (
    <div className="OrderIDContainer">
      <h1>Detalhe de pedido</h1>
      <div>
        <p>Cliente: {delivery.client.name}</p>
        <p>
          Endereço:{" "}
          {`${delivery.client.address}, ${delivery.client.number} - ${delivery.client.district}`}
        </p>
        <p>Descrição: {delivery.descriptionDelivery}</p>
        <ul>
          {delivery.deliveryList.map((items: any, index: number) => (
            <li key={`${items}${index}`}>
              {items.product} - {items.qtd}
            </li>
          ))}
        </ul>
        <div className="receiver">
          <p>Entregue {delivery.updatedAt}</p>
          <img src={delivery.signature} alt="Assinatura" />
          <span>Responsável</span>
        </div>
      </div>

      <button onClick={createPDF}>Imprimir</button>
    </div>
  );
}

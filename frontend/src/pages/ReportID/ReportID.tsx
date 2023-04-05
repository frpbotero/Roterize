import { useEffect, useState, useRef, useContext } from "react";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import carregando from "../../../public/carregando.gif";

export function ReportID() {
  const id = localStorage.getItem("idDelivery");
  const navigate = useNavigate();

  const [delivery, setDelivery] = useState<deliveryType>();

  useEffect(() => {
    async function fetchDelivery() {
      const response = await apiService.delivery.readById(id);
      setDelivery(response.data);
    }
    fetchDelivery();
  }, [id]);

  function pdfPrint() {
    navigate("/report");
  }

  if (!delivery) {
    return (
      <div>
        <img src={carregando} alt="" />
        <p>Carregando...</p>
      </div>
    );
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
      </div>

      <button onClick={pdfPrint}>Imprimir</button>
    </div>
  );
}

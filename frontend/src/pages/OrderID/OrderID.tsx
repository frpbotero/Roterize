import { useEffect, useState, useRef, useContext } from "react";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

//Biblioteca para assinatura
import SignatureCanvas from "react-signature-canvas";

import "./styles.css";

export function OrderID() {
  const id = localStorage.getItem("idDelivery");
  const navigate = useNavigate();

  const [delivery, setDelivery] = useState<deliveryType>();
  //Criando uma estado para armazenar a assinatura
  const [signature, setSignature] = useState<any>(null);
  //Utilizando o Ref para trabalhar referencia dentro do componente
  const signatureRef = useRef<SignatureCanvas>(null);

  useEffect(() => {
    async function fetchDelivery() {
      const response = await apiService.delivery.readById(id);
      setDelivery(response.data);
    }
    fetchDelivery();
  }, [id]);

  function clearSignature() {
    signatureRef.current?.clear();
    setSignature(null);
  }

  function saveSignature() {
    setSignature(signatureRef.current?.toDataURL());
  }

  function updateDelivery() {
    const payload: any = {
      updatedAt: moment(new Date()).format("DD/MM/YYYY"),
      status: "Entregue",
      signature: signature,
    };
    console.log(payload);
    apiService.delivery.updateURL(id, payload);

    navigate("/delivery");
  }

  if (!delivery) {
    return <div>Loading...</div>;
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
      <div>
        <div>
          <div>
            <SignatureCanvas
              ref={signatureRef}
              canvasProps={{ className: "sigCanvas" }}
            />
          </div>
          <button onClick={clearSignature}>Limpar</button>
          <button onClick={saveSignature}>Assinar</button>
        </div>
        {signature && (
          <div className="signature">
            <img src={signature} alt="Assinatura" />
            <p>Responsável</p>
          </div>
        )}
      </div>
      <button onClick={updateDelivery}>Salvar</button>
    </div>
  );
}

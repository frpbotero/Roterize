import { useEffect, useState, useRef } from "react";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";
import SignatureCanvas from "react-signature-canvas";

export function OrderID() {
  const id = localStorage.getItem("idDelivery");

  const [delivery, setDelivery] = useState<deliveryType>();
  const [signature, setSignature] = useState<any>(null);
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

  if (!delivery) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detalhe de pedido</h1>
      <p>Nome: {delivery.client.name}</p>
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
      <div>
        <div>
          <SignatureCanvas ref={signatureRef} />
          <button onClick={clearSignature}>Limpar</button>
          <button onClick={saveSignature}>Salvar</button>
        </div>
        {signature && (
          <div>
            <img src={signature} alt="Assinatura" />
          </div>
        )}
      </div>
    </div>
  );
}

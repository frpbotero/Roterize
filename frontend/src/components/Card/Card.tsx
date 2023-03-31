import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package } from "phosphor-react";
import "./Card.css";

type CardProps = {
  name: string | null;
  address: any;
  refreshCard: any;
  id: any;
  deliveryList: any;
  status: string;
};

export function Card({
  name,
  address,
  refreshCard,
  id,
  deliveryList,
  status,
}: CardProps) {
  const [clientInfo, setClientInfo] = useState();
  const navigate = useNavigate();
  //   async function ShowClient(id) {}

  //Função para atualizar o estado da entrega
  function saveLocalStorageID() {
    if (status == "Entregue") {
      alert("Pedido já entregue");
    } else {
      localStorage.setItem("idDelivery", id);
      const idTarget: any = localStorage.getItem("idDelivery");
      navigate(`/destiny`);
    }
  }

  return (
    <div className="containerCard">
      <div>
        <div className="headerCard">
          <button onClick={saveLocalStorageID}>
            <h3 className="clientName">{name}</h3>
          </button>
          <div className="package">
            <Package size={32} color="#f50000" />
            <h5>{deliveryList}</h5>
          </div>
        </div>
        <p className="clientAddress">{address} </p>
      </div>
    </div>
  );
}

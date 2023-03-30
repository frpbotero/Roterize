import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";

type CardProps = {
  name: string | null;
  address: string | null;
  refreshCard: any;
  id: any;
};

export function Card({ name, address, refreshCard, id }: CardProps) {
  const [clientInfo, setClientInfo] = useState();
  const navigate = useNavigate();
  //   async function ShowClient(id) {}

  //Função para atualizar o estado da entrega
  function saveLocalStorageID() {
    localStorage.setItem("idDelivery", id);
    const idTarget: any = localStorage.getItem("idDelivery");
    navigate(`/destiny`);
  }

  return (
    <div className="containerCard">
      <div>
        <button onClick={saveLocalStorageID}>
          <h3 className="clientName">{name}</h3>
        </button>

        <h3 className="clientName">{id}</h3>
        <p className="clientAddress">{address} </p>
      </div>
    </div>
  );
}

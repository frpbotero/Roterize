import { useState } from "react";

import "./Card.css";

type CardProps = {
  name: string | null;
  address: string | null;
  refreshCard: any;
};

export function Card({ name, address, refreshCard }: CardProps) {
  const [clientInfo, setClientInfo] = useState();
  console.log(name, address);
  //   async function ShowClient(id) {}

  //Função para atualizar o estado da entrega
  function ConcluedDelivery() {
    refreshCard();
  }

  return (
    <div className="containerCard">
      <button onClick={ConcluedDelivery}>X</button>
      <div>
        <h3 className="clientName">{name}</h3>
        <p className="clientAddress">{address} </p>
      </div>
    </div>
  );
}

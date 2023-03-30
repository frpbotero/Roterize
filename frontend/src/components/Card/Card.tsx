import { useState } from "react";
import { Link } from "react-router-dom";

import "./Card.css";

type CardProps = {
  name: string | null;
  address: string | null;
  refreshCard: any;
  id: any;
};

export function Card({ name, address, refreshCard, id }: CardProps) {
  const [clientInfo, setClientInfo] = useState();

  //   async function ShowClient(id) {}

  //Função para atualizar o estado da entrega

  return (
    <div className="containerCard">
      <div>
        <Link to={`/delivery/${id}`}>
          <h3 className="clientName">{name}</h3>
        </Link>
        <h3 className="clientName">{id}</h3>
        <p className="clientAddress">{address} </p>
      </div>
    </div>
  );
}

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

export function CardReport({
  name,
  address,
  refreshCard,
  id,
  deliveryList,
  status,
}: CardProps) {
  const navigate = useNavigate();

  console.log(status);
  const card = document.getElementById("card");

  //Função para atualizar o estado da entrega
  function saveLocalStorageID() {
    if (status == "Entregue") {
      localStorage.setItem("idDelivery", id);
      card?.classList.add(status);
      const idTarget: any = localStorage.getItem("idDelivery");
      navigate(refreshCard);
    } else {
      alert("Pedido já entregue");
    }
  }

  return (
    <div className="containerCard" id="card">
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

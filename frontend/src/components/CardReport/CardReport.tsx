import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package } from "phosphor-react";
import "./Card.css";
import * as S from "./styles";
import { Notification } from "../Notifications/Notifications"; // Importe o componente de notificação

type CardProps = {
  name: string | null;
  address: any;
  refreshCard: any;
  id: any;
  deliveryList: any;
  status: string;
  className?: string;
};

export function CardReport({
  name,
  address,
  refreshCard,
  id,
  deliveryList,
  status,
  className,
}: CardProps) {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const card = document.getElementById("card");

  function saveLocalStorageID() {
    if (status === "Entregue") {
      localStorage.setItem("idDelivery", id);
      card?.classList.add(status);
      const idTarget: any = localStorage.getItem("idDelivery");
      navigate(refreshCard);
    } else {
      setShowNotification(true); // Mostre a notificação
    }
  }

  return (
    <>
      <S.containerCard id="card" className={className}>
        <div className={`${status}`}>
          <S.headerCard>
            <button onClick={saveLocalStorageID}>
              <h3>{name}</h3>
            </button>
            <div className="package">
              <Package size={32} color="#052074" />
              <h5>{deliveryList}</h5>
            </div>
          </S.headerCard>
          <p>{address}</p>
        </div>
      </S.containerCard>
      {showNotification && (
        <Notification
          message="Pedido em rota!"
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
}

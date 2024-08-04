import { useContext, useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import { CardReport } from "../../components/CardReport/CardReport";
import { deliveryType, ErrorResponse } from "../../types/types";
import moment from "moment";
import "./Reports.css";

export function Reports() {
  const [delivery, setDelivery] = useState<deliveryType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchDate, setSearchDate] = useState<string>(moment().format("YYYY-MM-DD"));

  async function showDeliveries(date: string) {
    const formattedDate = moment(date).format("DD-MM-YYYY");
    try {
      const response = await apiService.delivery.readByDate(formattedDate);

      if (response.data && typeof response.data === 'object' && 'message' in response.data) {
        const errorResponse = response.data as ErrorResponse;
        setErrorMessage(errorResponse.message);
        setDelivery([]);
      } else {
        const deliveries = response.data as deliveryType[];
        const sortedDelivery = deliveries.sort(
          (a: deliveryType, b: deliveryType) => {
            if (a.status === "Entregue" && b.status !== "Entregue") {
              return -1;
            } else if (a.status !== "EmRota" && b.status === "EmRota") {
              return -1;
            }
            return 0;
          }
        );
        setDelivery(sortedDelivery);
        setErrorMessage(null);
      }
    } catch (e) {
      console.log("Erro ao buscar entregas:", e);
      setErrorMessage("Erro ao buscar entregas. Tente novamente mais tarde.");
      setDelivery([]);
    }
  }

  useEffect(() => {
    showDeliveries(searchDate);
  }, [searchDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSearchDate(newDate);
  };

  return (
    <div className="reports-container">
      <h1 className="reports-title">Entregas</h1>
      <div className="date-filter">
        <label htmlFor="date-input" className="date-label">Selecionar Data:</label>
        <input
          id="date-input"
          type="date"
          value={searchDate}
          onChange={handleDateChange}
          className="date-input"
        />
      </div>
      <div className="delivery-list">
        {errorMessage ? (
          <div className="no-deliveries-message">
            <p>{errorMessage}</p>
          </div>
        ) : !delivery.length ? (
          <div className="no-deliveries-message">
            <p>Nenhuma entrega encontrada para a data selecionada.</p>
          </div>
        ) : (
          delivery.map((order) => (
            <div key={order._id} className="delivery-item">
              <CardReport
                address={`${order.client.address}, ${order.client.number} - ${order.client.district}`}
                name={order.client.name}
                refreshCard="/report"
                id={order._id}
                deliveryList={order.deliveryList.length}
                status={order.status}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

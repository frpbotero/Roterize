import { useContext, useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import { CardReport } from "../../components/CardReport/CardReport";
import { deliveryType } from "../../types/types";
import carregando from "../../assets/carregando.gif";
import { dateContext } from "../../context/DateContext";
import moment from "moment";

export function Reports() {
  const [delivery, setDelivery] = useState<deliveryType[]>([]);
  const { date, setDate } = useContext(dateContext);
  const [searchDate, setSearchDate] = useState<string>(moment().format("DD/MM/YYYY"));

  async function showDeliveries(date: string) {
    try {
      const response = await apiService.delivery.readByDate(date);
      const sortedDelivery = response.data.sort(
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
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    showDeliveries(searchDate);
  }, [searchDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDate(event.target.value);
  };

  return (
    <div className="routerContainer">
      <h1>Entregas</h1>
      <input
        type="date"
        value={searchDate}
        onChange={handleDateChange}
      />
      {!delivery.length ? (
        <img src={carregando} alt="Carregando" />
      ) : (
        delivery.map((order, index) => (
          <div key={`${order._id}${index}`}>
            <CardReport
              address={`${order.client.address},${order.client.number} - ${order.client.district}`}
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
  );
}

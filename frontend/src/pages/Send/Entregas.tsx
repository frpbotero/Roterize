import { useEffect, useState } from "react";
import "./Clientes.css";
import { apiService } from "../../Api/Api";
import {
  clientsType,
  deliveryType,
  productsType,
  deliveryList,
} from "../../types/types";

interface Payload {
  client: any;
  delivery: any;
  descriptionDelivery: any;
}

interface DeliveryList {
  qtd: number;
  product: string;
}

export function Entregas() {
  //variaveis que compõe o payload
  const [product, setProduct] = useState<string>();
  const [client, setClient] = useState<String>();
  const [qtd, setQtd] = useState<Number>(0);
  const [descriptionLoad, setDescriptionLoad] = useState<string>("");
  const [delivery, setDelivery] = useState<DeliveryList[]>([]);

  //Variaiveis que armazenam as informações do DB
  const [clientDB, setClientDB] = useState<clientsType | any>();
  const [productsBD, setProductsBD] = useState<productsType[]>([]);

  async function showClientsProducts() {
    await apiService.clients
      .readAllURL()
      .then((response) => setClientDB(response.data))
      .catch((error) => console.log(error));
    await apiService.products
      .readAllURL()
      .then((response) => setProductsBD(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    showClientsProducts();
  }, []);

  function productAdd() {
    const payloadDelivery: DeliveryList = {
      qtd: Number(qtd),
      product: String(product),
    };
    const newDeliveryList = [...delivery, payloadDelivery];
    console.log(newDeliveryList);
    setDelivery(newDeliveryList);

    const deliveryCar = document.getElementById("deliveryInfo") as HTMLElement;
    deliveryCar.innerHTML += `<p>${qtd} - ${product} </p>`;
  }

  const infoClient = client;
  async function saveDelivery() {
    const payload: Payload = {
      client: infoClient ?? { name: "", address: "", number: 0, district: "" },
      delivery: delivery,
      descriptionDelivery: descriptionLoad ?? null,
    };

    await apiService.delivery
      .createURL(payload)
      .then((response) => alert(response.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="containerDelivery">
      <div className="modal">
        <div className="clientName">
          <label htmlFor="name">Nome Cliente</label>
          <select onChange={(e) => setClient(e.target.value)}>
            <option value="">Cliente Fulado de tal</option>
            {clientDB
              ? clientDB.map((cliente: any) => (
                  <option key={cliente._id} value={JSON.stringify(cliente)}>
                    {cliente.name}
                  </option>
                ))
              : ""}
          </select>
        </div>
        <div className="deliveryData">
          <div>
            <label htmlFor="produto">Produto</label>
            <select onChange={(e) => setProduct(e.target.value)}>
              <option value="">Caixa de papelão</option>
              {productsBD
                ? productsBD.map((product: any) => (
                    <option key={product._id} value={product.name}>
                      {product.name}
                    </option>
                  ))
                : ""}
            </select>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              onChange={(e) => setQtd(Number(e.target.value))}
            />
            <button onClick={productAdd}>Adicionar</button>
          </div>
        </div>
        <div id="deliveryInfo"></div>
        <div className="deliveryDescription">
          <textarea
            name="deliverDescription"
            onChange={(e) => setDescriptionLoad(e.target.value)}></textarea>
        </div>

        <div className="buttonsClient">
          <button>Cancelar</button>
          <button onClick={saveDelivery}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

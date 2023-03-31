import { useEffect, useState } from "react";
import "./Clientes.css";
import { apiService } from "../../Api/Api";
import { clientsType, productsType } from "../../types/types";

interface Payload {
  client: Object;
  deliveryList: any;
  descriptionDelivery: any;
  status: string;
}

interface DeliveryList {
  qtd: number;
  product: string;
}

export function Order() {
  //variaveis que compõe o payload
  const [product, setProduct] = useState<string>();
  const [client, setClient] = useState<clientsType | any>({});
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

  const productSelect = document.getElementById(
    "productSelect"
  ) as HTMLInputElement;
  const QtdProduct = document.getElementById("quantidade") as HTMLInputElement;
  const description = document.getElementById(
    "deliverDescription"
  ) as HTMLInputElement;
  async function saveDelivery() {
    const payload: Payload = {
      client: client,
      deliveryList: delivery,
      descriptionDelivery: descriptionLoad ?? null,
      status: "Em Rota",
    };

    await apiService.delivery
      .createURL(payload)
      .then((response) => alert(response.data))
      .catch((error) => console.log(error));

    productSelect.value = "";
    QtdProduct.value = "";
    description.value = "";
  }

  return (
    <div className="containerDelivery">
      <div className="modal">
        <div className="clientName">
          <label htmlFor="name">Nome Cliente</label>
          <select
            id="clientName"
            onChange={(e) => setClient(JSON.parse(e.target.value))}>
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
            <select
              id="productSelect"
              onChange={(e) => setProduct(e.target.value)}>
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
            id="deliverDescription"
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

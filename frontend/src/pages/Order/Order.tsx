import { useEffect, useState } from "react";
import { apiService } from "../../Api/Api";
import "./Order.css"
import { clientsType, productsType } from "../../types/types";

interface Payload {
  client: clientsType;
  deliveryList: any;
  descriptionDelivery: any;
  status: string;
}

interface DeliveryList {
  qtd: number;
  product: string;
}

export function Order() {
  // Variáveis que compõem o payload
  const [product, setProduct] = useState<string>("");
  const [client, setClient] = useState<clientsType | any>({});
  const [qtd, setQtd] = useState<number>(1);
  const [descriptionLoad, setDescriptionLoad] = useState<string>("");
  const [delivery, setDelivery] = useState<DeliveryList[]>([]);

  // Variáveis que armazenam as informações do DB
  const [clientDB, setClientDB] = useState<clientsType | any>();
  const [productsBD, setProductsBD] = useState<productsType[] | any>([]);

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
      status: "EmRota",
    };

    await apiService.delivery
      .createURL(payload)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => console.log(error));

    // Clear fields after saving
    handleCancel();
  }

  function handleCancel() {
    setClient({});
    setProduct("");
    setQtd(1);
    setDescriptionLoad("");
    setDelivery([]);

    // Clear the values of input fields
    const productSelect = document.getElementById("productSelect") as HTMLSelectElement;
    const qtdProduct = document.getElementById("quantidade") as HTMLInputElement;
    const descriptionTextArea = document.getElementById("deliverDescription") as HTMLTextAreaElement;

    if (productSelect) productSelect.value = "";
    if (qtdProduct) qtdProduct.value = "";
    if (descriptionTextArea) descriptionTextArea.value = "";
  }

  return (
    <div className="containerDelivery">
      <div className="modal">
        <div className="clientName">
          <label htmlFor="name">Nome Cliente</label>
          <select
            onChange={(e) => setClient(JSON.parse(e.target.value))}>
            <option>Selecione um cliente</option>
            {clientDB
              ? clientDB.map((cliente: any) => (
                <option key={cliente._id} value={JSON.stringify(cliente)}>
                  {cliente.name}
                </option>
              ))
              : "Carregando..."}
          </select>
        </div>
        <div className="deliveryData">
          <div id="ptd">
            <label htmlFor="produto">Produto</label>
            <select
              id="productSelect"
              onChange={(e) => setProduct(e.target.value)}>
              <option>Selecione um produto</option>
              {productsBD
                ? productsBD.map((product: any) => (
                  <option key={product._id} value={product.name}>
                    {product.name}
                  </option>
                ))
                : "Carregando..."}
            </select>
          </div>
          <div id="qtd">
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              onChange={(e) => setQtd(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="deliveryDescription">
          <textarea
            id="deliverDescription"
            name="deliverDescription"
            onChange={(e) => setDescriptionLoad(e.target.value)}></textarea>
        </div>

        <div className="buttonsClient">
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={saveDelivery}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

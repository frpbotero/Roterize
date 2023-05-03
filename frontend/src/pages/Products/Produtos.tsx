import { useState } from "react";
import "./Produtos.css";
import { apiService } from "../../Api/Api";
import { productsType } from "../../types/types";
import { CardProduct } from "../../components/CardProduct/CardProduct";

export function Produtos() {
  const [name, setName] = useState("default");
  const [description, setDescription] = useState("default");
  const [nameSearch, setNameSearch] = useState("");
  const [productSearch, setProductSearch] = useState<[productsType]>();

  const payload: productsType = {
    name: name,
    description: description,
  };

  const payloadSearch = {
    name: nameSearch,
  };

  const divCreate = document.getElementById("createProduct") as HTMLDivElement;
  const divSearch = document.getElementById("listSearch") as HTMLDivElement;

  function clear() {
    //Foi preciso referencia o tipo de input para que o typescript pudesse identificar o value dos campos que precisava
    const productNameInput = document.getElementById(
      "produtName"
    ) as HTMLInputElement;
    const descriptionProductInput = document.getElementById(
      "descriptionProduct"
    ) as HTMLTextAreaElement;
    productNameInput.value = "";
    descriptionProductInput.value = "";
  }
  async function createProduct() {
    await apiService.products
      .createURL(payload)
      .then((response) => alert(response.data.message))
      .catch((error) => console.log(error));
    clear();
  }

  async function getByName() {
    divCreate.classList.remove("modal");
    divSearch.classList.remove("hidden");
    divCreate.classList.add("hidden");
    await apiService.products
      .readByName(payloadSearch)
      .then((response) => setProductSearch(response.data))
      .catch((error) => console.log(error.message));
  }

  function create() {
    divCreate.classList.add("modal");
    divSearch.classList.add("hidden");
  }

  return (
    <div className="productContainer">
      <div className="busca">
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <button onClick={getByName}>Buscar</button>
      </div>
      <div className="cadastro">
        <button onClick={create}>Cadastrar</button>
      </div>

      <div className="modal" id="createProduct">
        <div className="productName">
          <label htmlFor="productName">Nome do Produto</label>
          <input
            type="text"
            id="produtName"
            placeholder="Nome produto"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="productData">
          <label htmlFor="descriptionProduct">Descrição</label>
          <textarea
            name="descriptionProduct"
            id="descriptionProduct"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="buttonsProduct">
          <button onClick={clear}>Cancelar</button>
          <button onClick={createProduct}>Salvar</button>
        </div>
      </div>
      <div className="modalSearch" id="listSearch">
        {productSearch
          ? productSearch.map((element) => (
              <CardProduct
                key={element._id}
                name={element.name}
                description={element.description}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

{
  /* <CardProduct name={product.name} description={product.description}/> */
}

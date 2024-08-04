import { useState } from "react";
import "./Produtos.css";
import { apiService } from "../../Api/Api";
import { productsType } from "../../types/types";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import product from "../../assets/product.svg";

export function Produtos() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [productSearch, setProductSearch] = useState<[productsType]>();

  const payload: productsType = {
    name: name,
    description: description,
  };

  const payloadSearch = {
    name: nameSearch,
  };

  function clear() {
    const productNameInput = document.getElementById("productName") as HTMLInputElement;
    const descriptionProductInput = document.getElementById("descriptionProduct") as HTMLTextAreaElement;
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
    const divCreate = document.getElementById("createProduct") as HTMLDivElement;
    const divSearch = document.getElementById("listSearch") as HTMLDivElement;
    divCreate.classList.remove("modal");
    divSearch.classList.remove("hidden");
    divCreate.classList.add("hidden");
    await apiService.products
      .readByName(payloadSearch)
      .then((response) => setProductSearch(response.data))
      .catch((error) => console.log(error.message));
  }

  function create() {
    const divCreate = document.getElementById("createProduct") as HTMLDivElement;
    const divSearch = document.getElementById("listSearch") as HTMLDivElement;
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

      <div className="formContainer">
        <div className="modal" id="createProduct">
          <div className="productName">
            <label htmlFor="productName">Nome do Produto</label>
            <input
              type="text"
              id="productName"
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
            <button onClick={createProduct}>Cadastrar</button>
          </div>
        </div>
        <div className="preview">
          <div className="previewImage">
            <img src={product} alt="Product Image" />
          </div>
          <div className="previewDetails">
            <h2>{name || "Nome do Produto"}</h2>
            <p>{description || "Descrição do Produto"}</p>
          </div>
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

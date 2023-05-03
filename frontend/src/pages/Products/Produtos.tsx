import { useState } from "react";
import "./Produtos.css";
import { apiService } from "../../Api/Api";
import { productsType } from "../../types/types";

export function Produtos() {
  const [name, setName] = useState("default");
  const [description, setDescription] = useState("default");
  const [nameSearch, setNameSearch] = useState("");

  const payload: productsType = {
    name: name,
    description: description,
  };

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
    await apiService.products
      .readByName(nameSearch)
      .then((response) => console.log(response.data));
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
        <button>Cadastrar</button>
      </div>

      <div className="modal">
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
    </div>
  );
}

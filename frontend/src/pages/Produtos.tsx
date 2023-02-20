import { useState } from "react"
import "./Produtos.css"
import { apiService } from "../Api/Api"
import { products } from "../types/types"

export function Produtos(){
   const [name,setName]=useState("default")
   const [description,setDescription]=useState("default")

   const payload:products= {
    name:name,
    description:description
   }

   function clear(){
        document.getElementById("produtName").value = ""
        document.getElementById("descriptionProduct").value = ""

   }
   async function createProduct(){
    await apiService.products.createURL(payload)
    .then(response=>alert(response.data.message))
    .catch(error=>console.log(error))
    
   }



    return(
        <div className="productContainer">
            <div className="busca">
            <input type="text" placeholder="Nome"/>
            <button>Buscar</button>
            </div>
            <div className="cadastro">
                <button>Cadastrar</button>
            </div>
            
            <div className="modal">
                <div className="productName">
                    <label htmlFor="productName">Nome do Produto</label>
                    <input type="text" id="produtName" placeholder="Nome produto" onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="productData">
              
                    <label htmlFor="descriptionProduct">Descrição</label>
                    <textarea name="descriptionProduct" id="descriptionProduct" onChange={e=>setDescription(e.target.value)}/>
                   

                </div>
                
                <div className="buttonsProduct">
                    <button onClick={clear}>Cancelar</button>
                    <button onClick={createProduct}>Salvar</button>
                </div>
                 
                
            </div>







        </div>
    )
}
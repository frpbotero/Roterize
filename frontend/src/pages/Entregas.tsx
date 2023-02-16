import { useState } from "react"
import "./Clientes.css"

export function Entregas(){
    const [product,setProduct]=useState()
    const [qtd,setQtd]=useState()
    const [delivery,setDelivery] =useState([{}])
    const [selectClient,setSelectClient] = useState()
    const [descriptionLoad,setDescriptionLoad] = useState()

    const clientes = [
        "Fulano de tal",
        "Ciclano",
        "Trojano"
    ]
    
   
    const produtos = [
        "Caixa de papelão",
        "Resma de papel A4",
        "Grampeador"
    ]
    
    function productAdd(){
        const deliveryCar = document.getElementById("deliveryInfo")
        let load = [...delivery,{qtd,product}]
        setDelivery(load)
        deliveryCar.innerHTML+= `<p>${qtd} - ${product} </p>`
    }
    function saveDelivery(){
        const payload = {
            client:selectClient,
            product:delivery,
            description:descriptionLoad
        }
        console.log(payload)
    }
    
    

    return(
        <div className="containerDelivery">
            
            
            <div className="modal">
                <div className="clientName">
                    <label htmlFor="name">Nome Cliente</label>
                    <select onChange={e=>setSelectClient(e.target.value)}>
                    <option value="">Cliente Fulado de tal</option>
                        {
                            clientes.map(cliente=>(
                            <option key={cliente} value={cliente}>{cliente}</option>
                            ))
                        }
                        
                     </select>   
                </div>
                <div className="deliveryData">
                    <div>
                    <label htmlFor="produto">Produto</label>
                    <select onChange={e=>setProduct(e.target.value)}>
                    <option value="">Caixa de papelão</option>
                        {
                            produtos.map(produto=>(
                            <option key={produto} value={produto}>{produto}</option>
                            ))
                        }
                     </select>   
                    <label htmlFor="quantidade">Quantidade</label>
                    <input type="number" id="quantidade"onChange={e=>setQtd(e.target.value)}/>
                    <button onClick={productAdd}>Adicionar</button>
                    </div>
                    
                    
                </div>
                <div id="deliveryInfo">
                    
                    
                </div>              
                <div className="deliveryDescription">
                        
                        <textarea name="deliverDescription" onChange={e=>setDescriptionLoad(e.target.value)}></textarea>
                </div>
                
                <div className="buttonsClient">
                    <button>Cancelar</button>
                    <button onClick={saveDelivery}>Salvar</button>
                </div>
                 
                
            </div>







        </div>
    )
}
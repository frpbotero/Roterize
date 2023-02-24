import { useEffect, useState } from "react"
import "./Clientes.css"
import { apiService } from "../Api/Api"
import { clients,  products } from "../types/types"

export function Entregas(){
    const [product,setProduct]=useState()
    const [qtd,setQtd]=useState()
    const [delivery,setDelivery] =useState <products>([])
    const [selectClient,setSelectClient] = useState<clients>()
    const [descriptionLoad,setDescriptionLoad] = useState<string|null>("")

    const [clientes,setClientes]=useState("")
    const [produtos,setProdutos]=useState("")
    
    async function showClientsProducts(){
        await apiService.clients.readAllURL()
        .then(response=>setClientes(response.data))
        .catch(error=>console.log(error))
        await apiService.products.readAllURL()
        .then(response=>setProdutos(response.data))
        .catch(error=>console.log(error))
        
    }
   useEffect(()=>{
    showClientsProducts()
   },[])
//    console.log(clientes)
    
    function productAdd(){
        const deliveryCar = document.getElementById("deliveryInfo")
        let load = [...delivery,{qtd,product}]
        setDelivery(load)
        deliveryCar.innerHTML+= `<p>${qtd} - ${product} </p>`
    }
    const client = selectClient
    console.log()



    async function saveDelivery(){
        const payload = {
            client:JSON.parse(client),
            deliveryList:delivery,
            descriptionDelivery:descriptionLoad
        }
        
        console.log(payload)
        await apiService.delivery.createURL(payload)
        .then(response=>alert(response.data.message))
        .catch(error=>console.log(error))
    }
    
    

    return(
        <div className="containerDelivery">
            
            
            <div className="modal">
                <div className="clientName">
                    <label htmlFor="name">Nome Cliente</label>
                    <select onChange={e=>setSelectClient(e.target.value)}>
                    <option value="">Cliente Fulado de tal</option>
                        {
                            clientes?clientes.map(cliente=>(<option key={cliente._id} value={JSON.stringify(cliente)}>{cliente.name}</option>))
                           :""
                                
                        }
                        
                     </select>   
                </div>
                <div className="deliveryData">
                    <div>
                    <label htmlFor="produto">Produto</label>
                    <select onChange={e=>setProduct(e.target.value)}>
                    <option value="">Caixa de papelão</option>
                        {
                            produtos?produtos.map(produto=>(<option key={produto._id} value={produto.name}>{produto.name}</option>)):""
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
import { useEffect, useState } from "react"
import { apiService } from "../Api/Api"
import { Card } from "../components/Card"
import { clients, delivery } from "../types/types"


export function Delivery(){
    const [delivery,setDelivery] = useState<Array<delivery>>([])
    const[client,setClient]=useState()

    async function showClients(){
        await apiService.delivery.readAllURL()
        .then((response:any)=>{
            const data = response.data       
            
            setDelivery(data)
           
          
        })
        
        
        .catch((e:Error)=>{
            console.log(e)
        })
       
    }
    
    useEffect(()=>{
        showClients()
    },[])
    console.log(delivery)
    return(
        <div>
            <h1>Delivery</h1>
            {
            delivery.map((loan,index)=>(
                <Card key={loan.descriptionDelivery} 
                name={loan.client[index].name} 
                address={`${loan.client[index].address}, ${loan.client[index].number} - ${loan.client[index].district}`}/>
    ))
} 
        </div>
    )
}



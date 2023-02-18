import { useEffect, useState } from "react"
import { apiService } from "../Api/Api"
import { Card } from "../components/Card"
import { clients, delivery } from "../types/types"


export function Delivery(){
    const [delivery,setDelivery] = useState<Array<delivery>>([])

    function showClients(){
        apiService.delivery.readAllURL().then((response:any)=>{
            setDelivery(response.data)
            console.log(response.data)
        }).catch((e:Error)=>{
            console.log(e)
        })
        console.log(delivery)
    }
    
    useEffect(()=>{
        showClients()
    },[])

    return(
        <div>
            <h1>Delivery</h1>


            {
                delivery.map(loan=>(
                    <Card />
                ))
            }



        </div>
    )
}
import { useState } from "react"
import { apiService } from "../Api/Api"
import { Card } from "../components/Card"
import { clients } from "../types/types"


export function Delivery(){
    const [clients,setClients] = useState<Array<clients>>([])

    apiService.clients.readAllURL().then((response:any)=>{
        setClients(response.data)
        console.log(response.data)
    }).catch((e:Error)=>{
        console.log(e)
    })
    console.log(clients)


    return(
        <div>
            <h1>Delivery</h1>



        </div>
    )
}
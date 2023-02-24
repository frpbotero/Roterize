import { useState } from "react"
import { delivery } from "../types/types"
import "./Card.css"

type CardProps = {
    name:string|null,
    address:string|null
}


export function Card({name,address}:CardProps){
    const [clientInfo,setClientInfo]=useState()
    async function ShowClient(id){

    }


    return(
        <div className="containerCard">
            <h3 className="clientName">{name}</h3>
            <p className="clientAddress">{address} </p>
        </div>
    )
}
// Av. Gov. Danilo de Matos Areosa, 1170 - Distrito Industrial I
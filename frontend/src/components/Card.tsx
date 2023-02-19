import { delivery } from "../types/types"
import "./Card.css"

type CardProps = {
    name:string,
    address:string
}


export function Card({name,address}:CardProps){
    return(
        <div className="containerCard">
            <h3 className="clientName">{name}</h3>
            <p className="clientAddress">{address} </p>
        </div>
    )
}
// Av. Gov. Danilo de Matos Areosa, 1170 - Distrito Industrial I
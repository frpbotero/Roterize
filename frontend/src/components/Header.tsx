import logo  from "../assets/Router2.svg"
import "./Header.css"
import { Link } from "react-router-dom"

export function Header(){

 

    return(
        <div className="containerHeader">
        <img src={logo} alt="" />
        <Link to="/login"><button >Login</button></Link>
        </div>
    )
}
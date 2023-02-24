import logo  from "../assets/Router2.svg"
import "./Header.css"
import { Link } from "react-router-dom"
export function HeaderDelivery(){
    function logout(){
        localStorage.removeItem("user")
    }
    
    return(
        <div className="containerHeader">
        <img src={logo} alt="" />
        <div className="contentOptionHeader">
            <input type="date" />
            <Link to="/delivery">Go</Link>
        </div>

        <button onClick={logout}>Logout</button>
        </div>
    )
}
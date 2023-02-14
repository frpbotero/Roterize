import logo  from "../assets/Router2.svg"
import "./Header.css"

export function HeaderDelivery(){
    return(
        <div className="containerHeader">
        <img src={logo} alt="" />
        <div className="contentOptionHeader">
            <input type="date" />
        </div>

        <button>Login</button>
        </div>
    )
}
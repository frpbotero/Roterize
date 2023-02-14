import logo  from "../assets/Router2.svg"
import "./Header.css"

export function Header(){
    return(
        <div className="containerHeader">
        <img src={logo} alt="" />
        <button>Login</button>
        </div>
    )
}
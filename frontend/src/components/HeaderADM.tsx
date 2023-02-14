import logo  from "../assets/Router2.svg"
import "./Header.css"

export function HeaderADM(){
    return(
        <div className="containerHeader">
        <img src={logo} alt="" />
        <div className="contentOptionHeader">
            <a href="">PRODUTO</a>
            <a href="">CLIENTE</a>
            <a href="">CAUTELA</a>
            <a href="">USUÁRIO</a>
        </div>

        <button>Login</button>
        </div>
    )
}
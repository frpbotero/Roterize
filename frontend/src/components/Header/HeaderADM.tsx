import { Link } from "react-router-dom";
import logo from "../../assets/router2.svg";
import "./Header.css";

export function HeaderADM() {
  function logout() {
    localStorage.removeItem("user");
  }

  return (
    <div className="containerHeader">
      <img src={logo} alt="" />
      <div className="contentOptionHeader">
        <Link to="/produtos">PRODUTO</Link>
        <Link to="/clientes">CLIENTE</Link>
        <Link to="/entregas">CAUTELA</Link>
        {/* <Link to="">USUÁRIO</Link> */}
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

import { useState } from "react";
import logo from "../../assets/router2.svg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const oauth = localStorage.getItem("User");
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState<any>(null); // adicione o estado
  function logout() {
    localStorage.removeItem("User");
    navigate("/");
  }
  return (
    <div className="containerHeader">
      <img src={logo} alt="" />
      {!oauth ? (
        <div>
          <Link to="/login">
            <button className="buttonLogin">Login</button>
          </Link>
        </div>
      ) : oauth === "ADM" ? (
        <div className="containerHeader">
          <div className="contentOptionHeader">
            <Link
              to="/product"
              className={activeLink === "/product" ? "active" : ""}
              onClick={() => setActiveLink("/product")}>
              Produtos
            </Link>
            <Link
              to="/client"
              className={activeLink === "/client" ? "active" : ""}
              onClick={() => setActiveLink("/client")}>
              Clientes
            </Link>
            <Link
              to="/order"
              className={activeLink === "/order" ? "active" : ""}
              onClick={() => setActiveLink("/order")}>
              Pedidos
            </Link>
            <Link
              to="/delivery"
              className={activeLink === "/delivery" ? "active" : ""}
              onClick={() => setActiveLink("/delivery")}>
              Rota
            </Link>
            {/* <Link to="">USUÁRIO</Link> */}
          </div>

          <button className="buttonlogout" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="containerHeader">
          <div className="contentOptionHeader">
            <input type="date" />
            <Link to="/delivery">Go</Link>
          </div>

          <button className="buttonlogout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

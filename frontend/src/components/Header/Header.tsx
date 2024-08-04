import { useContext, useEffect, useState } from "react";
import logo from "../../assets/router2.svg";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

export function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  // const { setDate } = useContext(dateContext);

  const [activeLink, setActiveLink] = useState<any>(null);
  function logout() {
    setIsAuthenticated(false);
    localStorage.clear();
    navigate("/");
  }
  const local = localStorage.getItem("user");

  function getUser() {
    if (local) {
      setUser(local);
    }
  }
  console.log(!!user);

  useEffect(() => {
    getUser();
    setIsAuthenticated(!!user);
  }, [user]);
  return (
    <div className={styles.containerHeader}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </Link>
      {!isAuthenticated ? (
        <div>
          <Link to="/login">
            <button className={styles.buttonLogin}>Login</button>
          </Link>
        </div>
      ) : (
        <div className={styles.containerHeader}>
          <div className={styles.contentOptionHeader}>
            <Link
              to="/product"
              className={activeLink === "/product" ? styles.active : ""}
              onClick={() => setActiveLink("/product")}
            >
              Produtos
            </Link>
            <Link
              to="/client"
              className={activeLink === "/client" ? styles.active : ""}
              onClick={() => setActiveLink("/client")}
            >
              Clientes
            </Link>
            <Link
              to="/order"
              className={activeLink === "/order" ? styles.active : ""}
              onClick={() => setActiveLink("/order")}
            >
              Pedidos
            </Link>
            <Link
              to="/reports"
              className={activeLink === "/reports" ? styles.active : ""}
              onClick={() => setActiveLink("/reports")}
            >
              Report
            </Link>
          </div>
          <button className={styles.buttonlogout} onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

import { useState, useContext } from "react";
import { apiService } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import adm from "../../assets/adm.png";
import user from "../../assets/user.svg";
import pass from "../../assets/pass.svg";
import login from "../../assets/login.svg";
import { IUser } from "../../types/types";
import { userContext } from "../../context/userContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderBottom: "2px solid",
  },
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(userContext);
  const [error, setError] = useState<string>("");

  const payload: IUser = {
    email: email,
    password: password,
  };

  const navigate = useNavigate();



  function loginADM() {
    setLoading(true);
    setError("");

    apiService.auth
      .loginUser(payload)
      .then((response) => {
        const data = response.data;
        localStorage.setItem("user", data.token);
        setUser(data.token);
        navigate("/product");
      })
      .catch((error) => {
        setError(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className={styles.containerLogin}>
      <div className={styles["login-container"]}>
        <div className={styles["left-panel"]}>
          <h1>Bem-vindo ao Roterize</h1>
          <div className={styles["input-group"]}>
            <img src={user} alt="User Icon" />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles["input-group"]}>
            <img src={pass} alt="Password Icon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={loginADM} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
          {error && <p className={styles["error-message"]}>{error}</p>}
        </div>
        <div className={styles["right-panel"]}>
          <img src={login} className={styles.imageLogin} alt="Welcome" />
        </div>
      </div>
    </div>
  );
}

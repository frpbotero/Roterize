import { useState, useContext } from "react";
import { apiService } from "../../Api/Api";

import Modal from "react-modal";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import adm from "../../assets/adm.png";

import user from "../../assets/user.svg";
import pass from "../../assets/pass.svg";
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
  const [modaIsOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(userContext);

  const payload: IUser = {
    email: email,
    password: password,
  };

  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }
  function CloseModal() {
    setIsOpen(false);
  }

  function loginADM() {
    apiService.auth
      .loginUser(payload)
      .then((response) => {
        const data = response.data;
        localStorage.setItem("user", JSON.stringify(data.token));
        setUser(data.token);
        navigate("/product");
      })
      .catch((error) => console.log(error.response.data.message));
  }
  function loginDelivery() {
    localStorage.setItem("User", "Delivery");
    navigate("/delivery");
  }

  return (
    <div>
      <div className="containerLogin">
        <button onClick={openModal}>ADM</button>
        {/* <button onClick={openModalDelivery}>Delivery</button> */}
      </div>
      <div>
        <Modal
          isOpen={modaIsOpen}
          onRequestClose={CloseModal}
          style={customStyles}>
          <div className="containerForm">
            <img className="imageLogin" src={adm} alt="" />
            <h3>Login</h3>
            <p>Faça login em sua conta</p>
            <div className="contentForm">
              <div>
                <img src={user} alt="" />{" "}
                <input
                  type="text"
                  placeholder="Login"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <img src={pass} alt="" />{" "}
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={loginADM}>Login</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

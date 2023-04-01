import { useState } from "react";

import Modal from "react-modal";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import adm from "../../assets/adm.png";
import delivery from "../../assets/delivery.png";
import user from "../../assets/user.svg";
import pass from "../../assets/pass.svg";

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
  const [modaIsOpenDelivery, setIsOpenDelivery] = useState(false);

  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }
  function CloseModal() {
    setIsOpen(false);
  }
  function openModalDelivery() {
    setIsOpenDelivery(true);
  }
  function CloseModalDelivery() {
    setIsOpenDelivery(false);
  }

  function loginADM() {
    localStorage.setItem("User", "ADM");
    navigate("/adm");
  }
  function loginDelivery() {
    localStorage.setItem("User", "Delivery");
    navigate("/delivery");
  }

  return (
    <div>
      <div className="containerLogin">
        <button onClick={openModal}>ADM</button>
        <button onClick={openModalDelivery}>Delivery</button>
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
                <input type="text" placeholder="Login" />
              </div>
              <div>
                <img src={pass} alt="" />{" "}
                <input type="password" placeholder="Senha" />
              </div>
              <button onClick={loginADM}>Login</button>
            </div>
          </div>
        </Modal>
      </div>
      <Modal
        isOpen={modaIsOpenDelivery}
        onRequestClose={CloseModalDelivery}
        style={customStyles}>
        <div className="containerForm">
          <img className="imageLogin" src={delivery} alt="" />
          <h3>Login</h3>
          <p>Faça login em sua conta</p>
          <div className="contentForm">
            <div>
              <img src={user} alt="" />{" "}
              <input type="text" placeholder="Login" />
            </div>
            <div>
              <img src={pass} alt="" />{" "}
              <input type="password" placeholder="Senha" />
            </div>
            <button onClick={loginDelivery}>Login</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

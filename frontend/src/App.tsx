import "./App.css";

import Modal from "react-modal";

import { Outlet } from "react-router-dom";
import { HeaderADM } from "./components/Header/HeaderADM";
import { HeaderDelivery } from "./components/Header/HeaderDelivery";
import { Header } from "./components/Header/Header";

const oauth = localStorage.getItem("user");

Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import "./App.css";

import Modal from "react-modal";
import { AppRoutes } from "./routes/Routes";
import { Outlet } from "react-router-dom";
import { HeaderADM } from "./components/Header/HeaderADM";
import { HeaderDelivery } from "./components/Header/HeaderDelivery";
import { Header } from "./components/Header/Header";

const oauth = localStorage.getItem("user");

Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      {!oauth ? (
        <Header />
      ) : oauth === "ADM" ? (
        <HeaderADM />
      ) : (
        <HeaderDelivery />
      )}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import "./App.css";

import Modal from "react-modal";
import { AppRoutes } from "./routes/Routes";
import { Outlet } from "react-router-dom";
import { HeaderADM } from "./components/HeaderADM";
import { HeaderDelivery } from "./components/HeaderDelivery";
import { Header } from "./components/Header";

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

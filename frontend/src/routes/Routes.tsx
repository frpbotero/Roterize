import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Delivery } from "../pages/Delivery";
import { Produtos } from "../pages/Produtos";
import { Entregas } from "../pages/Entregas";
import { Clientes } from "../pages/Clientes";
import { Header } from "../components/Header";
import { HeaderADM } from "../components/HeaderADM";
import { HeaderDelivery } from "../components/HeaderDelivery";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/entregas" element={<Entregas />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </Router>
  );
};

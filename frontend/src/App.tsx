import "./App.css"

import { Home } from "./pages/Home"

import { Login } from "./pages/Login"
import { GestADM } from "./pages/GestADM"
import { Clientes } from "./pages/Clientes"
import { Produtos } from "./pages/Produtos"
import { Entregas } from "./pages/Entregas"
import { Delivery } from "./pages/Delivery"

import Modal from 'react-modal';
import { AppRoutes } from "./routes/Routes"

Modal.setAppElement('#root');
function App() {
  


  return (
    <div className="App">
      <AppRoutes/>
      <div className="content">
        
      </div>
    </div>
  )
}

export default App

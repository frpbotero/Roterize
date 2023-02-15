import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { HeaderADM } from "./components/HeaderADM"
import { HeaderDelivery } from "./components/HeaderDelivery"
import { Login } from "./pages/Login"
import { GestADM } from "./pages/GestADM"
import "./App.css"
import Modal from 'react-modal';

Modal.setAppElement('#root');
function App() {
  return (
    <div className="App">
      <HeaderDelivery />
      <div className="content">
        <GestADM />
      </div>
    </div>
  )
}

export default App

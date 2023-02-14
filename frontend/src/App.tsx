import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { HeaderADM } from "./components/HeaderADM"
import { HeaderDelivery } from "./components/HeaderDelivery"
import { Login } from "./pages/Login"

import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
 
  return (
    <div className="App">
      <HeaderDelivery />
      <div className="content">
      <Login />

      </div>
    </div>
  )
}

export default App

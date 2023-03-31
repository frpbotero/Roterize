import delivery from "../../assets/deliveryHome.png";
import "./styles.css";
export function Home() {
  return (
    <div className="homeContainer">
      <img className="logoHome" src={delivery} alt="" />
      <h1>Levando seu pedido até você!</h1>
    </div>
  );
}

import { useEffect, useState, useRef, useContext } from "react";
import { apiService } from "../../Api/Api";
import { deliveryType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import carregando from "../../../public/carregando.gif";
import "./ReportID.css";
//Imports refernte ao PDFMake
import { pdfMakeFonts } from "./fonts/pdfFonts";
import * as pdfMake from "pdfmake/build/pdfmake";

// Carrega as fontes necessárias
pdfMakeFonts.vfs = pdfMakeFonts.vfs;

export function ReportID() {
  const id = localStorage.getItem("idDelivery");
  const navigate = useNavigate();

  const [delivery, setDelivery] = useState<deliveryType>();

  function generatePdf() {
    const documentDefinition: any = {
      content: [
        { text: "Detalhe de pedido", style: "header" },
        { text: `Cliente: ${!delivery ? "" : delivery.client.name}` },
        {
          text: `Endereço: ${!delivery ? "" : delivery.client.address}, ${
            !delivery ? "" : delivery.client.number
          } - ${!delivery ? "" : delivery.client.district}`,
        },
        { text: `Descrição: ${!delivery ? "" : delivery.descriptionDelivery}` },
        { text: "Itens:", style: "subheader" },
        {
          ul: !delivery
            ? ""
            : delivery.deliveryList.map(
                (items: any) => `${items.product} - ${items.qtd}`
              ),
        },
        {
          text: "Assinatura:",
          margin: [0, 20, 0, 5],
        },
        {
          image: !delivery ? "" : delivery.signature,
          width: 150,
          margin: [0, 0, 0, 20],
        },
        {
          text: `Responsável:`,
          margin: [0, 0, 0, 40],
        },
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 20, 0, 10],
        },
      },
    };

    return pdfMake.createPdf(documentDefinition);
  }

  useEffect(() => {
    async function fetchDelivery() {
      const response = await apiService.delivery.readById(id);
      setDelivery(response.data);
    }
    fetchDelivery();
  }, [id]);

  function pdfPrint() {
    if (!delivery) {
      console.error("Delivery is undefined.");
      alert("Não foi possível gerar o PDF.");
      return;
    }
    const pdfDocGenerator = generatePdf();
    pdfDocGenerator.open();
  }

  if (!delivery) {
    return (
      <div>
        <img src={carregando} alt="" />
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="OrderIDContainer">
      <h1>Detalhe de pedido</h1>
      <div>
        <p>Cliente: {delivery.client.name}</p>
        <p>
          Endereço:{" "}
          {`${delivery.client.address}, ${delivery.client.number} - ${delivery.client.district}`}
        </p>
        <p>Descrição: {delivery.descriptionDelivery}</p>
        <ul>
          {delivery.deliveryList.map((items: any, index: number) => (
            <li key={`${items}${index}`}>
              {items.product} - {items.qtd}
            </li>
          ))}
        </ul>
        <div className="receiver">
          <p>Entregue {delivery.date}</p>
          <img src={delivery.signature} alt="Assinatura" />
          <span>Responsável</span>
        </div>
      </div>

      <button onClick={pdfPrint}>Imprimir</button>
    </div>
  );
}

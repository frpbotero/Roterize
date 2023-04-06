import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generatePDF(delivery: any): void {
  const doc = new jsPDF();

  // Configurar a fonte e tamanho do título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  // Adicionar o título
  doc.text("Romaneio de Entrega", 75, 10);

  // Configurar a fonte e tamanho do texto
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  // Adicionar as informações do pedido
  doc.text(`Cliente: ${delivery.client.name}`, 10, 20);
  doc.text(
    `Endereço: ${delivery.client.address}, ${delivery.client.number} - ${delivery.client.district}`,
    10,
    30
  );
  doc.text(`Descrição: ${delivery.descriptionDelivery}`, 10, 40);
  doc.text("Responsável", 10, 220);

  // Adicionar a lista de entrega como uma lista com marcadores
  console.log(delivery.deliveryList);
  const items: any = delivery.deliveryList.map(
    (item: any, index: any) => `${item.product} - ${item.qtd}`
  );
  doc.setFontSize(12);
  doc.text("Itens:", 10, 60);
  autoTable(doc, {
    startY: 65,
    head: [["Produto - Quantidade"]],
    body: [items],
  });

  // Configurar a fonte e tamanho do texto da informação de entrega
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  // Adicionar a informação de entrega
  doc.text(`Entregue ${delivery.date}`, 10, 210);

  // Converter a imagem base64 para um formato suportado (JPEG ou PNG)
  const img = new Image();
  img.src = delivery.signature;
  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0);
      const imageURL = canvas.toDataURL("image/png"); // ou "image/png" para PNG

      // Adicionar a imagem ao PDF como URL da imagem
      doc.addImage(imageURL, "PNG", 30, 230, 80, 50);

      // Salvar o PDF com o nome "detalhe_pedido.pdf"
      doc.save("detalhe_pedido.pdf");
    } else {
      console.error("Erro ao desenhar imagem no contexto 2D");
    }
  };
}

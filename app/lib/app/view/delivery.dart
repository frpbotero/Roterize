import 'dart:convert';

import 'package:app/app/api/Helper.dart';
import 'package:app/app/models/delivery_model.dart';
import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_signaturepad/signaturepad.dart';
import 'dart:ui' as ui;

class Delivery extends StatefulWidget {
  const Delivery({
    super.key,
  });

  @override
  State<Delivery> createState() => _DeliveryState();
}

class _DeliveryState extends State<Delivery> {
  final GlobalKey<SfSignaturePadState> signatureGlobalKey = GlobalKey();
  String id = "";
  String company = "";
  List<DeliveryItemModel> items = [];
  String? signature; // Variável para armazenar a assinatura em Base64
  DeliveryModel? delivery; // Alterado para ser nullable

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final args = ModalRoute.of(context)!.settings.arguments as String;
    id = args;
    _fetchDeliveryDetails(id);
  }

  void _handleClearButtonPressed() {
    signatureGlobalKey.currentState!.clear();
  }

  Future<void> _handleSaveButtonPressed() async {
    final data =
        await signatureGlobalKey.currentState!.toImage(pixelRatio: 3.0);
    final byteData = await data.toByteData(format: ui.ImageByteFormat.png);
    final uint8List = byteData!.buffer.asUint8List();
    setState(() {
      signature = base64Encode(uint8List); // Converte a imagem para Base64
    });

    // Debug: Exibe a assinatura em Base64 no console
    print('Signature in Base64: $signature');

    await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (BuildContext context) {
          return Scaffold(
            appBar: AppBar(),
            body: Center(
              child: Container(
                color: Colors.grey[300],
                child: Image.memory(uint8List),
              ),
            ),
          );
        },
      ),
    );
  }

  Future<void> _fetchDeliveryDetails(String id) async {
    DeliveryModel deliveryData = await HelperApi.getDelivery(id);
    setState(() {
      delivery = deliveryData;
      company = delivery!.client.name;
      items = delivery!.deliveryList;
    });
  }

  @override
  Widget build(BuildContext context) {
    // Verifica se delivery é nulo antes de acessar suas propriedades
    if (delivery == null) {
      return Scaffold(
        appBar: AppBar(title: const Text("Delivery")),
        body: const Center(
          child: CircularProgressIndicator(),
        ),
      );
    }

    return Scaffold(
      appBar: AppBar(title: const Text("Delivery")),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              company,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
            ),
            const Divider(),
            ...items.map((DeliveryItemModel item) => Text(
                  '${item.qtd} x ${item.product}',
                  style: const TextStyle(fontSize: 16),
                )),
            if (delivery!.status == "EmRota") ...[
              Container(
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                ),
                child: SfSignaturePad(
                  key: signatureGlobalKey,
                  backgroundColor: Colors.white,
                  strokeColor: Colors.black,
                  minimumStrokeWidth: 1.0,
                  maximumStrokeWidth: 4.0,
                ),
              ),
            ] else if (delivery!.signature != null) ...[
              Container(
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                ),
                child: Image.memory(
                  base64Decode(delivery!.signature!
                      .replaceFirst('data:image/png;base64,', '')),
                  fit: BoxFit.cover,
                ),
              ),
            ],
            const SizedBox(height: 10),
            if (delivery!.status == "EmRota") ...[
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  TextButton(
                    onPressed: _handleSaveButtonPressed,
                    child: const Text('Assinar'),
                  ),
                  TextButton(
                    onPressed: _handleClearButtonPressed,
                    child: const Text('Limpar'),
                  ),
                ],
              ),
              const SizedBox(height: 10),
            ],
            SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton(
                onPressed: () {
                  if (delivery != null) {
                    // Atualiza o status e assinatura
                    final updatedDelivery = delivery!.update(
                      status: "Entregue",
                      signature: signature,
                    );
                    HelperApi.putDelivery(id, updatedDelivery);
                  }
                },
                child: const Text(
                  "Salvar",
                  style: TextStyle(fontSize: 20),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

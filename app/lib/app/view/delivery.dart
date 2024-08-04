import 'dart:convert';
import 'package:Roterize/app/api/Helper.dart';
import 'package:Roterize/app/models/delivery_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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
  String description = "";
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
      description = delivery!.descriptionDelivery;
    });
  }

  void _setOrientationLandscape() {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.landscapeRight,
      DeviceOrientation.landscapeLeft,
    ]);
  }

  void _setOrientationPortrait() {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
  }

  Future<void> _updateDelivery() async {
    if (delivery != null) {
      final updatedDelivery = delivery!.update(
        status: "Entregue",
        signature: signature,
      );
      try {
        final response = await HelperApi.putDelivery(id, updatedDelivery);
        if (response.statusCode == 200) {
          Navigator.pushNamed(context, "/deliveryList");
        } else {
          _showErrorDialog(
              'Falha ao salvar. Código de erro: ${response.statusCode}');
        }
      } catch (e) {
        _showErrorDialog('Erro ao salvar: ${e.toString()}');
      }
    }
  }

  void _showErrorDialog(String message) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Erro'),
          content: Text(message),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
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

    final isLandscape =
        MediaQuery.of(context).orientation == Orientation.landscape;

    return Scaffold(
      appBar: AppBar(title: const Text("Delivery")),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                company,
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              const Divider(),
              const Text(
                "Itens",
                style: TextStyle(fontWeight: FontWeight.w500, fontSize: 20),
              ),
              ...items.map((DeliveryItemModel item) => Text(
                    '${item.qtd} x ${item.product}',
                    style: const TextStyle(fontSize: 16),
                  )),
              const SizedBox(height: 10),
              const Text(
                "Observação",
                style: TextStyle(fontWeight: FontWeight.w500, fontSize: 20),
              ),
              Text(
                description,
                style: const TextStyle(fontSize: 16),
              ),
              const SizedBox(height: 20),
              if (delivery!.status == "EmRota") ...[
                Stack(
                  children: [
                    Container(
                      height: isLandscape
                          ? MediaQuery.of(context).size.height * 0.7
                          : 150, // Ajusta a altura da área de assinatura
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
                    Positioned(
                      top: 5,
                      right: 5,
                      child: IconButton(
                        icon: const Icon(Icons.screen_rotation),
                        onPressed: isLandscape
                            ? _setOrientationPortrait
                            : _setOrientationLandscape,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
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
              ] else if (delivery!.signature != null) ...[
                Container(
                  height: isLandscape
                      ? MediaQuery.of(context).size.height * 0.7
                      : 150, // Ajusta a altura da área de exibição da assinatura
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
              SizedBox(
                width: double.infinity,
                height: 50,
                child: ElevatedButton(
                  onPressed: _updateDelivery,
                  child: const Text(
                    "Salvar",
                    style: TextStyle(fontSize: 20),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

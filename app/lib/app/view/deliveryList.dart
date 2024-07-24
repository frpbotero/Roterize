import 'package:app/app/api/Helper.dart';
import 'package:app/app/widget/cardDeliveyLocations.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class DeliveryList extends StatefulWidget {
  const DeliveryList({super.key});

  @override
  State<DeliveryList> createState() => _DeliveryListState();
}

class _DeliveryListState extends State<DeliveryList> {
  bool isSelect = false;
  late DateTime data;
  List<dynamic> deliveries = [];
  bool loading = false;

  showDate() async {
    data = (await showDatePicker(
        context: context,
        firstDate: DateTime(2022),
        lastDate: DateTime(2030)))!;
    setState(() {
      isSelect = true;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    getDeliveries();
    super.initState();
  }

  getDeliveries() async {
    loading = true;
    var response = await HelperApi.getRoute();
    if (mounted) {
      setState(() {
        loading = false;
      });
    }

    deliveries = response;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Roterize",
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.only(top: 10, left: 10, right: 10),
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              SizedBox(
                width: 200,
                child: TextButton(
                  child: isSelect
                      ? Text(
                          "${data.day} / ${data.month.round()} / ${data.year}")
                      : const Text("Data"),
                  onPressed: () {
                    showDate();
                  },
                ),
              ),
              OutlinedButton(
                onPressed: () {
                  getDeliveries();
                },
                child: const Text("Buscar"),
              )
            ],
          ),
          const SizedBox(
            height: 10,
          ),
          SizedBox(
            height: 750,
            child: ListView(
              children: deliveries.map((delivery) {
                // Verifique se o delivery tem a propriedade 'client' e se 'client' é um mapa válido
                if (delivery.containsKey('client') &&
                    delivery['client'] is Map<String, dynamic>) {
                  // Acessando as propriedades do cliente apenas se 'client' for um mapa válido
                  String name = delivery['client']['name'] ?? '';
                  String address = delivery['client']['address'] ?? '';
                  int number = delivery['client']['number'] ?? 0;
                  String district = delivery['client']['district'] ?? '';
                  List products = delivery['deliveryList'];
                  int qtd = 0;
                  String id = delivery['_id'];
                  for (Map product in products) {
                    int qtdProduct = product['qtd'];
                    qtd += qtdProduct;
                  }
                  bool isDelivered =
                      delivery['status'] == "Entregue" ? true : false;
                  return CardDeliveryLocations(
                      company: name,
                      addressDelivery: "$address - $number - $district",
                      box: "$qtd",
                      isDelivered: isDelivered,
                      id: id);
                } else {
                  return const Text(
                      'Aconteceu algo de errado, favor entrar em contato com suporte.');
                }
              }).toList(),
            ),
          )
        ],
      ),
    );
  }
}

// CardDeliveryLocations(
//   company: delivery['client']['name'] ?? "Não indenficado",
//   addressDelivery:
//       "${delivery['client']['address']}- ${delivery['client']['number']} - ${delivery['client']['district']}",
//   box: "2",
//   isDelivered:
//       delivery['status'] == "Entregue" ? true : false,
// ),

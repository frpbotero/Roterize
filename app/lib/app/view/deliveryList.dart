import 'package:Roterize/app/api/Helper.dart';
import 'package:Roterize/app/widget/cardDeliveyLocations.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

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

  @override
  void initState() {
    super.initState();
    data = DateTime.now();
  }

  Future<void> showDate() async {
    DateTime? selectedDate = await showDatePicker(
      context: context,
      initialDate: data,
      firstDate: DateTime(2022),
      lastDate: DateTime(2030),
    );
    if (selectedDate != null) {
      setState(() {
        data = selectedDate;
        isSelect = true;
      });
    }
  }

  Future<void> getDeliveries(DateTime date) async {
    setState(() {
      loading = true;
    });

    String formattedDate = DateFormat('dd-MM-yyyy').format(date);
    var response = await HelperApi.getRoute(formattedDate);

    if (mounted) {
      setState(() {
        deliveries = response;
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Roterize"),
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
                      ? Text("${data.day} / ${data.month} / ${data.year}")
                      : const Text("Data"),
                  onPressed: () {
                    showDate();
                  },
                ),
              ),
              OutlinedButton(
                onPressed: () {
                  getDeliveries(data);
                },
                child: const Text("Buscar"),
              ),
            ],
          ),
          const SizedBox(height: 10),
          SizedBox(
            height: 750,
            child: deliveries.isEmpty
                ? Center(
                    child: Text(
                      'Sem entregas agendadas',
                      style: TextStyle(fontSize: 18, color: Colors.grey),
                    ),
                  )
                : ListView(
                    children: deliveries.map((delivery) {
                      if (delivery.containsKey('client') &&
                          delivery['client'] is Map<String, dynamic>) {
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
                        bool isDelivered = delivery['status'] == "Entregue";
                        String description = delivery['descriptionDelivery'];
                        return CardDeliveryLocations(
                          company: name,
                          addressDelivery: "$address - $number - $district",
                          box: "$qtd",
                          isDelivered: isDelivered,
                          id: id,
                          description: description,
                        );
                      } else {
                        return const Text(
                            'Aconteceu algo de errado, favor entrar em contato com suporte.');
                      }
                    }).toList(),
                  ),
          ),
        ],
      ),
    );
  }
}

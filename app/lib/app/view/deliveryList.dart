import 'package:app/app/widget/cardDeliveyLocations.dart';
import 'package:flutter/material.dart';

class DeliveryList extends StatefulWidget {
  const DeliveryList({super.key});

  @override
  State<DeliveryList> createState() => _DeliveryListState();
}

class _DeliveryListState extends State<DeliveryList> {
  bool isSelect = false;
  late DateTime data;

  showDate() async {
    data = (await showDatePicker(
        context: context,
        firstDate: DateTime(2022),
        lastDate: DateTime(2030)))!;
    print(data);
    setState(() {
      isSelect = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: const Text(
        "Roterize",
      )),
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
                  )),
              OutlinedButton(onPressed: () {}, child: const Text("Buscar"))
            ],
          ),
          const SizedBox(
            height: 10,
          ),
          const SizedBox(
            height: 750,
            child: SingleChildScrollView(
              child: Column(
                children: [
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations(),
                  CardDeliveryLocations()
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}

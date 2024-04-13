import 'package:app/app/widget/cardDeliveyLocations.dart';
import 'package:flutter/material.dart';

class DeliveryList extends StatefulWidget {
  const DeliveryList({super.key});

  @override
  State<DeliveryList> createState() => _DeliveryListState();
}

class _DeliveryListState extends State<DeliveryList> {
  TextEditingController data = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(
                width: 200,
                child: TextFormField(
                  controller: data,
                  decoration: const InputDecoration(hintText: "Data"),
                ),
              ),
              OutlinedButton(onPressed: () {}, child: Text("Buscar"))
            ],
          ),
          const Padding(
            padding: EdgeInsets.all(8.0),
            child: SizedBox(
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
            ),
          )
        ],
      ),
    );
  }
}

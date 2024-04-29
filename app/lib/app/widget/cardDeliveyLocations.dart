import 'package:flutter/material.dart';

class CardDeliveryLocations extends StatelessWidget {
  final String company;
  final String box;
  final String addressDelivery;
  final bool isDelivered;

  const CardDeliveryLocations(
      {super.key,
      required this.company,
      required this.box,
      required this.addressDelivery,
      required this.isDelivered});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: isDelivered ? Color.fromARGB(144, 244, 243, 243) : Colors.white,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  company,
                  style: const TextStyle(fontWeight: FontWeight.w700),
                ),
                const SizedBox(
                  height: 5,
                ),
                Text("$box Volumes"),
                const SizedBox(
                  height: 5,
                ),
                Text(addressDelivery)
              ],
            ),
            IconButton(
                onPressed: () {
                  Navigator.pushNamed(context, "/delivery");
                },
                icon: const Icon(Icons.arrow_forward_ios_outlined))
          ],
        ),
      ),
    );
  }
}

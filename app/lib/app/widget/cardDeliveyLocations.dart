import 'package:flutter/material.dart';

class CardDeliveryLocations extends StatelessWidget {
  const CardDeliveryLocations({super.key});

  @override
  Widget build(BuildContext context) {
    bool isDelivered = false;

    return Card(
      color: isDelivered ? Color.fromARGB(144, 244, 243, 243) : Colors.white,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "CB Comercial",
                  style: TextStyle(fontWeight: FontWeight.w700),
                ),
                SizedBox(
                  height: 5,
                ),
                Text("2 Volumes"),
                SizedBox(
                  height: 5,
                ),
                Text("Rua Franz Schubert, 840 - Flores")
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

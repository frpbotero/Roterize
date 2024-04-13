import 'package:flutter/material.dart';

class CardDeliveryLocations extends StatelessWidget {
  const CardDeliveryLocations({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [Text("CB Comercial"), Text("10 Crachas")],
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

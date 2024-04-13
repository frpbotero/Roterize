import 'package:app/app/view/delivery.dart';
import 'package:app/app/view/deliveryList.dart';
import 'package:app/app/view/home.dart';
import 'package:flutter/material.dart';

Map<String, Widget Function(BuildContext)> getRoutes() {
  return {
    '/': (context) => const HomePage(),
    '/deliveryList': (context) => const DeliveryList(),
    '/delivery': (context) => const Delivery()
  };
}

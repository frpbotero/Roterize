import 'package:Roterize/app/api/Helper.dart';
import 'package:Roterize/app/appWidget.dart';
import 'package:flutter/material.dart';

void main() {
  HelperApi.startServer();
  runApp(const AppWidget());
}

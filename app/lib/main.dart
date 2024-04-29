import 'package:app/app/api/Helper.dart';
import 'package:app/app/appWidget.dart';
import 'package:flutter/material.dart';

void main() {
  HelperApi.startServer();
  runApp(const AppWidget());
}

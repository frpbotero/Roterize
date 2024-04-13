import 'package:app/app/getRoutes.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class AppWidget extends StatelessWidget {
  const AppWidget({super.key});

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
    return MaterialApp(
      title: 'Plugin SDK Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: 'Montserrat',
        colorScheme: ColorScheme.fromSeed(
            seedColor: Colors.blue, primary: Colors.blue[900]),
        useMaterial3: false,
      ),
      initialRoute: '/',
      routes: getRoutes(),
    );
  }
}

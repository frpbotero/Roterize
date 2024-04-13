import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController loginController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: ListView(
          children: [
            SizedBox(
              child: TextFormField(
                controller: loginController,
                decoration: const InputDecoration(hintText: "Login"),
              ),
            ),
            SizedBox(
              child: TextFormField(
                controller: passwordController,
                decoration: const InputDecoration(hintText: "Password"),
              ),
            ),
            SizedBox(
                child: OutlinedButton(
              child: const Text("Login"),
              onPressed: () {
                Navigator.pushNamed(context, '/deliveryList');
              },
            ))
          ],
        ),
      ),
    );
  }
}

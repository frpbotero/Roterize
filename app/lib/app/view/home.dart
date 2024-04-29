import 'package:app/app/api/Helper.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  bool showPass = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.only(top: 100.0),
          child: Align(
            alignment: Alignment.topCenter,
            child: SizedBox(
              width: 350,
              height: 500,
              child: Card(
                  child: Column(
                children: [
                  const SizedBox(
                    child: Image(
                      image: AssetImage("images/logo.png"),
                      width: 250,
                    ),
                  ),
                  const Text(
                    "Roterize",
                    style: TextStyle(fontSize: 30),
                  ),
                  SizedBox(
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: TextFormField(
                        controller: email,
                        decoration: const InputDecoration(hintText: "Login"),
                      ),
                    ),
                  ),
                  SizedBox(
                    width: 350.0, // Defina uma largura específica
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: TextFormField(
                        controller: password,
                        obscureText: showPass,
                        decoration: InputDecoration(
                          hintText: "Password",
                          suffixIcon: IconButton(
                            onPressed: () {
                              setState(() {
                                showPass = !showPass;
                              });
                            },
                            icon: showPass
                                ? const Icon(Icons.key_off)
                                : const Icon(Icons.key),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: SizedBox(
                        width: double.infinity,
                        height: 50,
                        child: OutlinedButton(
                          style: ButtonStyle(
                              backgroundColor:
                                  MaterialStateProperty.all(Colors.blue[900])),
                          child: const Text(
                            "Login",
                            style: TextStyle(color: Colors.white, fontSize: 20),
                          ),
                          onPressed: () async {
                            var response = await HelperApi.loginUser(
                                email.text, password.text);
                            if (response.statusCode == 200) {
                              Navigator.pushNamed(context, "/deliveryList");
                            }
                          },
                        )),
                  )
                ],
              )),
            ),
          ),
        ),
      ),
    );
  }
}

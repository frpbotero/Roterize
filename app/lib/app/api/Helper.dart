import 'dart:convert';

import 'package:http/http.dart' as http;

class HelperApi {
  static String addressApi = "https://roterize.onrender.com";

  static startServer() async {
    await http.get(Uri.parse(addressApi));
  }

  static loginUser(String email, String password) async {
    var user = {"email": email, "password": password};

    var response = await http.post(Uri.parse("$addressApi/auth"),
        headers: {"Content-Type": "application/json"}, body: jsonEncode(user));

    print("AQUI : ${response.body}");
    return response;
  }
}

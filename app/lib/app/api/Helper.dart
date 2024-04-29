import 'dart:convert';

import 'package:app/app/provider/user.provider.dart';
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

    LocalStorage.saveAccessToken(response.body);
    return response;
  }

  static getRoute() async {
    String? token = await LocalStorage.getAccessToken();

    var response = await http.get(
      Uri.parse("$addressApi/delivery"),
      headers: {
        "Authorization": "Bearer $token",
        "Content-Type": "application/json"
      },
    );

    List<dynamic> responseList = jsonDecode(response.body);

    return responseList;
  }
}

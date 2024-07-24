import 'dart:convert';

import 'package:app/app/models/delivery_model.dart';
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

    if (response.statusCode == 200) {
      LocalStorage.saveAccessToken(response.body);
    }
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

  static getDelivery(String id) async {
    String? token = await LocalStorage.getAccessToken();

    var response = await http.get(
      Uri.parse("$addressApi/delivery/$id"),
      headers: {
        "Authorization": "Bearer $token",
        "Content-Type": "application/json"
      },
    );
    var jsonMap = jsonDecode(response.body);
    var delivery = DeliveryModel.fromJson(jsonMap);

    return delivery;
  }

  static putDelivery(String id, DeliveryModel delivery) async {
    String? token = await LocalStorage.getAccessToken();

    var response = await http.put(Uri.parse("$addressApi/delivery/$id"),
        headers: {
          "Authorization": "Bearer $token",
          "Content-Type": "application/json"
        },
        body: jsonEncode(delivery));
    if (response.statusCode == 200) {
      print("SUCESSO");
    }
    return response;
  }
}

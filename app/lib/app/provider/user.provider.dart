import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

class LocalStorage {
  static Future<void> saveUserData(Map<String, dynamic> userData) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('userData', json.encode(userData));
  }

  static Future<Map<String, dynamic>?> getUserData() async {
    final prefs = await SharedPreferences.getInstance();
    final userDataString = prefs.getString('userData');
    if (userDataString != null) {
      return json.decode(userDataString);
    }
    return null;
  }

  static Future<void> saveRouteData(List<dynamic> routeData) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('routeData', json.encode(routeData));
  }

  static Future<List<dynamic>?> getRouteData() async {
    final prefs = await SharedPreferences.getInstance();
    final userDataString = prefs.getString('routeData');
    if (userDataString != null) {
      return json.decode(userDataString);
    }
    return null;
  }

  static Future<void> saveAccessToken(String apiResponse) async {
    Map<String, dynamic> responseMap = jsonDecode(apiResponse);

    // Obtenha o valor do token do mapa
    String token = responseMap['token'];

    // Salve o token usando o SharedPreferences

    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('accessToken', token);
  }

  static Future<String?> getAccessToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('accessToken');
  }
}

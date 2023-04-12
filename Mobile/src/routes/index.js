import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Deliveries from "../pages/Deliveries";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();
export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Deliveries" component={Deliveries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

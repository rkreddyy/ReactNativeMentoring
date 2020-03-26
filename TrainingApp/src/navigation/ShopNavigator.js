import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../screens/Products";
import { SHOP_ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerMode: "none" }}>
      <Stack.Screen name={SHOP_ROUTES.PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};

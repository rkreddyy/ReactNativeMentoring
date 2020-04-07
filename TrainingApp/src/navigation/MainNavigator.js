import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import Product from "../screens/Product";
import AuthScreen from "../screens/Auth";
import Startup from "../screens/Startup";
import Shop from "../screens/Shop";
import { MAIN_ROUTES, AUTH_ROUTES, STARTUP_ROUTES, SHOP_ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default React.forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName={STARTUP_ROUTES.STARTUP}
      >
        <Stack.Screen
          name={STARTUP_ROUTES.STARTUP}
          component={Startup}
          options={{ headerShown: false }} />

        <Stack.Screen
          name={AUTH_ROUTES.AUTH}
          component={AuthScreen}
          options={{ headerShown: false }} />

        <Stack.Screen
          name={MAIN_ROUTES.DRAWER}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={MAIN_ROUTES.PRODUCT}
          component={Product}
          options={{ headerShown: false }} />

        <Stack.Screen
          name={SHOP_ROUTES.SHOP}
          component={Shop}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

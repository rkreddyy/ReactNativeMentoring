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
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00a8f3',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name={STARTUP_ROUTES.STARTUP}
          component={Startup} />

        <Stack.Screen
          name={AUTH_ROUTES.AUTH}
          component={AuthScreen} />

        <Stack.Screen
          name={MAIN_ROUTES.DRAWER}
          component={DrawerNavigator} />

        <Stack.Screen
          name={MAIN_ROUTES.PRODUCT}
          component={Product} />

        <Stack.Screen
          name={SHOP_ROUTES.SHOP}
          component={Shop} />

      </Stack.Navigator>
    </NavigationContainer>
  );
});

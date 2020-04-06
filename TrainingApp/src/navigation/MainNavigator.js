import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import Product from "../screens/Product";
import AuthScreen from "../screens/Auth";
import Startup from "../screens/Startup";
import { MAIN_ROUTES, AUTH_ROUTES, STARTUP_ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default React.forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName={STARTUP_ROUTES.STARTUP}
      >
        <Stack.Screen name={STARTUP_ROUTES.STARTUP} component={Startup} />
        <Stack.Screen name={AUTH_ROUTES.AUTH} component={AuthScreen} />
        <Stack.Screen
          name={MAIN_ROUTES.DRAWER}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={MAIN_ROUTES.PRODUCT} component={Product} />

      </Stack.Navigator>
    </NavigationContainer>
  );
});

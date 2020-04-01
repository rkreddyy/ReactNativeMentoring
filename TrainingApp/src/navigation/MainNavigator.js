import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import Product from "../screens/Product";
import { SignIn } from "../screens/Auth/SignIn";
import { SignUp } from "../screens/Auth/SignUp";
import { MAIN_ROUTES, AUTH_ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default React.forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName={MAIN_ROUTES.AUTH}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={AUTH_ROUTES.SIGNIN} component={SignIn} />
        <Stack.Screen name={AUTH_ROUTES.SIGNUP} component={SignUp} />
        <Stack.Screen
          name={MAIN_ROUTES.DRAWER}
          component={DrawerNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name={MAIN_ROUTES.PRODUCT} component={Product} />

      </Stack.Navigator>
    </NavigationContainer>
  );
});

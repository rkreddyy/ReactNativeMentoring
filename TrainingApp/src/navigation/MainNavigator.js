import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigtor from "./AuthNavigation";
import Product from "../screens/Product";
import { MAIN_ROUTES } from "../constants/routes";

const Stack = createStackNavigator();

export default React.forwardRef((props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName={MAIN_ROUTES.DRAWER}
        screenOptions={{
          headerBackTitle: "Back"
        }}
      >
        <Stack.Screen name={MAIN_ROUTES.AUTH} component={AuthNavigtor} />
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

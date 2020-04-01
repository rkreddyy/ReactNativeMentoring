import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { AUTH_ROUTES } from "../constants/routes";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator initialRouteName={HOME_ROUTES.SHOP}>
      <Tab.Screen name={AUTH_ROUTES.SIGNOUT} component={SignIn} />
      <Tab.Screen name={AUTH_ROUTES.SIGNOUT} component={SignUp} />
    </Tab.Navigator>
  );
};

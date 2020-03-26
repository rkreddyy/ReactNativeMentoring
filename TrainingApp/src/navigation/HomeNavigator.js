import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/Cart";
import ShopNavigator from "./ShopNavigator";
import { HOME_ROUTES } from "../constants/routes";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator initialRouteName={HOME_ROUTES.SHOP}>
      <Tab.Screen name={HOME_ROUTES.SHOP} component={ShopNavigator} />
      <Tab.Screen name={HOME_ROUTES.CART} component={CartScreen} />
    </Tab.Navigator>
  );
};

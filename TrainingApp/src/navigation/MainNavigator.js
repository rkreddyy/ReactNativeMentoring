import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import SettingsScreen from "../screens/Settings";
import ShopNavigator from "./ShopNavigator";
import Cart from '../screens/Cart';
import { ROUTES } from "../constants/routes";

const Drawer = createDrawerNavigator();

export default React.forwardRef((icon, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Drawer.Navigator initialRouteName={ROUTES.HOME}>
        <Drawer.Screen name={ROUTES.HOME} component={ShopNavigator} />
        <Drawer.Screen name={ROUTES.PROFILE} component={Cart} />
        <Drawer.Screen name={ROUTES.WISHLIST} component={Cart} />
        <Drawer.Screen name={ROUTES.CART} component={Cart} />
        <Drawer.Screen name={ROUTES.ORDERS} component={Cart} />
        <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
});

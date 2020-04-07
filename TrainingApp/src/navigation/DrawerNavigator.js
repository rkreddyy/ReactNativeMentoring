import React from 'react'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import SettingsScreen from "../screens/Settings";
import HomeNavigator from "./HomeNavigator";
import { DRAWER_ROUTES } from "../constants/routes";
import CustomDrawerContent from './DrawerMenuItems';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName={DRAWER_ROUTES.HOME}
      drawerContent={props => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name={DRAWER_ROUTES.HOME} component={HomeNavigator} />
      <Drawer.Screen name={DRAWER_ROUTES.SETTINGS} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

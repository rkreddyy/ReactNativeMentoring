import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableHighlight } from "react-native";
import DrawerNavigator from "./DrawerNavigator";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from "../screens/Product";
import AuthScreen from "../screens/Auth";
import Startup from "../screens/Startup";
import Shop from "../screens/Shop";
import { BaseStyles } from '../app.styles';
import { MAIN_ROUTES, AUTH_ROUTES, STARTUP_ROUTES, SHOP_ROUTES, HOME_ROUTES } from "../constants/routes";
import Cart from "../screens/Cart";

const Stack = createStackNavigator();

export default React.forwardRef((icon, ref) => {

  function HeaderButtonsJSX({ icon, goToScreen = '' }) {
    const navigation = useNavigation();

    navigate = () => {
      // alert(goToScreen);
      goToScreen === HOME_ROUTES.CART ?
        navigation.navigate(goToScreen) :
        navigation.navigate('openDrawer');
    }

    return (
      <TouchableHighlight
        style={margin = 20}
        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
        hitSlop={BaseStyles.buttonHitSlop}
        onPress={() => navigate()}>
        <FontAwesomeIcon icon={icon} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
      </TouchableHighlight>
    );
  }

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
            fontSize: BaseStyles.fontSize.m,
            color: BaseStyles.colors.white,
          },
          headerLeft: () => (
            <HeaderButtonsJSX icon={faBars} goToScreen='drawer'></HeaderButtonsJSX>
          ),
          title: 'Ecommerce Shop',
          headerRight: () => (
            <HeaderButtonsJSX icon={faShoppingCart} goToScreen={HOME_ROUTES.CART}></HeaderButtonsJSX>
          ),
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

        <Stack.Screen
          name={HOME_ROUTES.CART}
          component={Cart} />

      </Stack.Navigator>
    </NavigationContainer>
  );
});

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { TouchableHighlight } from "react-native";
import Shop from "../screens/Shop";
import Product from "../screens/Product";
import AuthScreen from "../screens/Auth";
import Startup from "../screens/Startup";
import Cart from "../screens/Cart";
import { ROUTES } from "../constants/routes";
import { BaseStyles } from '../app.styles';

const Stack = createStackNavigator();

export default ({ navigation }) => {
  return (
    <Stack.Navigator
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
          <TouchableHighlight
            style={margin = 20}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => navigation.openDrawer()}>
            <FontAwesomeIcon icon={faBars} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
          </TouchableHighlight>),
        title: 'Ecommerce Shop',
        headerRight: () => (
          <TouchableHighlight
            style={margin = 20}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => navigation.navigate(ROUTES.CART)}>
            <FontAwesomeIcon icon={faShoppingCart} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
          </TouchableHighlight>),
      }}
    >
      <Stack.Screen
        name={ROUTES.STARTUP}
        component={Startup}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ROUTES.AUTH}
        component={AuthScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.SHOP} component={Shop} />
      <Stack.Screen name={ROUTES.PRODUCT} component={Product} />
      <Stack.Screen name={ROUTES.CART} component={Cart} />
    </Stack.Navigator>
  );
};

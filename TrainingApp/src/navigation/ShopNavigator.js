import React from "react";
import { useSelector } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { TouchableHighlight } from "react-native";
import Cart from "../screens/cart";
import ProductDetails from '../screens/product-details/product-details';
import Main from '../screens/main/main';
import SignIn from '../screens/auth/sign-in/sign-in';
import SignUp from '../screens/auth/sign-up/sign-up';
import RestorePassword from '../screens/auth/restore-password/restore-password';
import { ROUTES } from "../constants/routes";
import { BaseStyles } from '../app.styles';

const Stack = createStackNavigator();

export default ({ navigation }) => {
  const { isSignedIn } = useSelector(state => state.auth);
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
      {isSignedIn ? (
        <>
          <Stack.Screen
            name={ROUTES.MAIN}
            component={Main}
            options={{
              title: 'Products',
              headerStyle: {
                backgroundColor: BaseStyles.colors.lightBlue,
                height: 50,
              },
              headerTintColor: BaseStyles.colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name={ROUTES.PRODUCT_DETAILS}
            component={ProductDetails}
            options={({ route }) => ({
              title: route.params.product.name,
              headerStyle: {
                backgroundColor: BaseStyles.colors.lightBlue,
              },
              headerTintColor: BaseStyles.colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name={ROUTES.CART}
            component={Cart}
            options={{
              title: 'Cart',
              headerStyle: {
                backgroundColor: BaseStyles.colors.lightBlue,
                height: 50,
              },
              headerTintColor: BaseStyles.colors.white,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </>
      ) : (
          <>
            <Stack.Screen
              name={ROUTES.SIGNIN}
              component={SignIn}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name={ROUTES.SIGNUP}
              component={SignUp}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name={ROUTES.RESTORE_PASSWORD}
              component={RestorePassword}
              options={{
                header: () => null,
              }}
            />
          </>
        )}
    </Stack.Navigator>
    // <Stack.Navigator
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#00a8f3',
    //     },
    //     headerTintColor: '#ffffff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //       fontSize: BaseStyles.fontSize.m,
    //       color: BaseStyles.colors.white,
    //     },
    //     headerLeft: () => (
    //       <TouchableHighlight
    //         style={margin = 20}
    //         underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
    //         hitSlop={BaseStyles.buttonHitSlop}
    //         onPress={() => navigation.openDrawer()}>
    //         <FontAwesomeIcon icon={faBars} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
    //       </TouchableHighlight>),
    //     title: 'Ecommerce Shop',
    //     headerRight: () => (
    //       <TouchableHighlight
    //         style={margin = 20}
    //         underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
    //         hitSlop={BaseStyles.buttonHitSlop}
    //         onPress={() => navigation.navigate(ROUTES.CART)}>
    //         <FontAwesomeIcon icon={faShoppingCart} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
    //       </TouchableHighlight>),
    //   }}
    // >
    //   {isSignedIn ? (
    //     <>
    //       <Stack.Screen
    //         name={ROUTES.MAIN}
    //         component={Main}
    //         options={{
    //           title: 'Products',
    //           headerStyle: {
    //             backgroundColor: BaseStyles.colors.lightBlue,
    //             height: 50,
    //           },
    //           headerTintColor: BaseStyles.colors.white,
    //           headerTitleStyle: {
    //             fontWeight: 'bold',
    //           },
    //         }}
    //       />
    //       <Stack.Screen
    //         name={ROUTES.PRODUCT_DETAILS}
    //         component={ProductDetails}
    //         options={({ route }) => ({
    //           title: route.params.product.name,
    //           headerStyle: {
    //             backgroundColor: BaseStyles.colors.lightBlue,
    //           },
    //           headerTintColor: BaseStyles.colors.white,
    //           headerTitleStyle: {
    //             fontWeight: 'bold',
    //           },
    //         })}
    //       />
    //       <Stack.Screen name={ROUTES.CART} component={Cart} />
    //     </>) :
    //     (<>
    //       <Stack.Navigator>
    //         <Stack.Screen
    //           name={ROUTES.SIGN}
    //           component={SignIn}
    //           options={{
    //             header: () => null,
    //           }}
    //         />
    //         <Stack.Screen
    //           name={ROUTES.SIGNUP}
    //           component={SignUp}
    //           options={{
    //             header: () => null,
    //           }}
    //         />
    //         <Stack.Screen
    //           name={ROUTES.RESTORE_PASSWORD}
    //           component={RestorePassword}
    //           options={{
    //             header: () => null,
    //           }}
    //         />
    //       </Stack.Navigator>
    //     </>)}
    // </Stack.Navigator>
  );
};

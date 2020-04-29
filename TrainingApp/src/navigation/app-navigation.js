import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../screens/product-details/product-details';
import AuthNavigation from './auth-navigation';
import Drawer from './drawer-navigation/drawer-navigation';

import { MAIN_ROUTES } from './routes';

const Stack = createStackNavigator();

const AppNavigation = () => {
    const { isSignedIn } = useSelector(state => state.auth);
    return (
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
                        <Stack.Screen
                            name={MAIN_ROUTES.MAIN.name}
                            component={Drawer}
                            options={{
                                header: () => null,
                            }}
                        />
                        <Stack.Screen
                            name={MAIN_ROUTES.PRODUCT_DETAILS.name}
                            component={ProductDetails}
                            options={({ route }) => ({
                                title: route.params.product.name,
                                header: () => null,
                            })}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name={MAIN_ROUTES.AUTH.name}
                        component={AuthNavigation}
                        options={{
                            header: () => null,
                        }}
                    />
                )}
            </Stack.Navigator>
    );
};

export default AppNavigation;

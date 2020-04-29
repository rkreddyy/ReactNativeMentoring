import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetails from '../screens/product-details/product-details';
import AuthNavigation from './auth-navigation';
import Drawer from './drawer-navigation/drawer-navigation';

import { ROUTES } from './routes';

const Stack = createStackNavigator();

const AppNavigation = () => {
    const { isSignedIn } = useSelector(state => state.auth);
    return (
        <Stack.Navigator>
            {isSignedIn ? (
                <>
                    <Stack.Screen
                        name={ROUTES.MAIN}
                        component={Drawer}
                        options={{
                            header: () => null,
                        }}
                    />
                    <Stack.Screen
                        name={ROUTES.PRODUCT_DETAILS}
                        component={ProductDetails}
                        options={({ route }) => ({
                            title: route.params.product.name,
                            header: () => null,
                        })}
                    />
                </>
            ) : (
                    <Stack.Screen
                        name={ROUTES.AUTH}
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

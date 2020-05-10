import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch, useSelector } from 'react-redux';

import ProductDetails from '../screens/product-details/product-details';
import AuthNavigation from './auth-navigation';
import Drawer from './drawer-navigation/drawer-navigation';

import { MAIN_ROUTES } from './routes';
import ProductList from '../screens/product-list/product-list';
import AppModal, { getHideModalButtonConfig } from './app-modal/app-modal';
import { AppModalActions } from './app-modal/app-modal.slice';
import { AppStorage } from '../utils/app-async-storage';
import { setUserDataIfTokenAlive } from '../screens/auth/auth.slice';

const Stack = createStackNavigator();

const showConnectionWarning = dispatch => {
    dispatch(
        AppModalActions.showModal({
            iconName: 'warning',
            message: 'There are no living internet connection',
            buttons: [getHideModalButtonConfig({ dispatch, label: 'Ok' })],
        }),
    );
};

const AppNavigation = () => {
    const dispatch = useDispatch();
    const { isSignedIn } = useSelector(state => state.auth);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (!state.isConnected) {
                showConnectionWarning(dispatch);
            }
        });

        AppStorage.getStoredUserData().then(([userName, email, password, token]) => {
            if (token) {
                dispatch(setUserDataIfTokenAlive({ userName, email, password, token }));
            }
        });

        return () => {
            unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <AppModal />
            <NavigationContainer>
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
                                options={({ route }) => {
                                    return {
                                        title: route.params.product.cell.name,
                                        header: () => null,
                                    };
                                }}
                            />
                            <Stack.Screen
                                name={MAIN_ROUTES.PRODUCT_LIST.name}
                                component={ProductList}
                                options={{
                                    header: () => null,
                                }}
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
            </NavigationContainer>
        </>
    );
};

export default AppNavigation;

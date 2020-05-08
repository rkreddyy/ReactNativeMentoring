import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import StartupScreen from '../screens/startup';
import AppNavigation from './app-navigation';

import { MAIN_ROUTES } from './routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
    const { isStartScreenLoading } = useSelector(state => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isStartScreenLoading ? (
                        <>
                            <Stack.Screen
                                name={MAIN_ROUTES.START_UP.name}
                                component={StartupScreen}
                                options={{
                                    header: () => null,
                                }}
                            />
                        </>
                    ) : (
                            <Stack.Screen
                                name={MAIN_ROUTES.APP.name}
                                component={AppNavigation}
                                options={{
                                    header: () => null,
                                }}
                            />
                        )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;

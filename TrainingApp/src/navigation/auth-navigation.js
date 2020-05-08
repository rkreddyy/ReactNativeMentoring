import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/auth/sign-in/sign-in';
import SignUp from '../screens/auth/sign-up/sign-up';
import RestorePassword from '../screens/auth/restore-password/restore-password';

import { AUTH_ROUTES } from './routes';

const Stack = createStackNavigator();

const AuthNavigation = ({}) => (
    <Stack.Navigator>
        <Stack.Screen
            name={AUTH_ROUTES.SING_IN}
            component={SignIn}
            options={{
                header: () => null,
            }}
        />
        <Stack.Screen
            name={AUTH_ROUTES.SIGN_UP}
            component={SignUp}
            options={{
                header: () => null,
            }}
        />
        <Stack.Screen
            name={AUTH_ROUTES.RESTORE_PASSWORD}
            component={RestorePassword}
            options={{
                header: () => null,
            }}
        />
    </Stack.Navigator>
);

export default AuthNavigation;

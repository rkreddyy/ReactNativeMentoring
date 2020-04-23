import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/auth/sign-in/sign-in';
import SignUp from '../screens/auth/sign-up/sign-up';
import RestorePassword from '../screens/auth/restore-password/restore-password';

import { ROUTES } from './routes';

const Stack = createStackNavigator();

const AuthNavigation = ({}) => (
    <Stack.Navigator>
        <Stack.Screen
            name={ROUTES.SING_IN}
            component={SignIn}
            options={{
                header: () => null,
            }}
        />
        <Stack.Screen
            name={ROUTES.SIGN_UP}
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
    </Stack.Navigator>
);

export default AuthNavigation;

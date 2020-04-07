import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Colors } from '../../themes';
import { SHOP_ROUTES, AUTH_ROUTES } from '../../constants/routes';
import * as authActions from '../../store/actions/auth';
import styles from './style';

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate(AUTH_ROUTES.AUTH);
                return;
            }
            props.navigation.navigate(SHOP_ROUTES.SHOP);

            dispatch(authActions.authenticate(userData.userId, userData.token));
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
};

export default StartupScreen;

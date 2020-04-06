import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Colors } from '../../themes';
import { MAIN_ROUTES } from '../../constants/routes';
import styles from './style';

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate(AUTH_ROUTES.LOGIN);
                return;
            }
            props.navigation.navigate(MAIN_ROUTES.DRAWER);
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

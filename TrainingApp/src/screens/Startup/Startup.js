import React, { useEffect } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { BaseStyles } from '../../app.styles';
import { AuthActions } from '../../store/auth/authSlice';
import styles from './style';

const StartupScreen = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                dispatch(AuthActions.getFailedSignIn({ error: 'no_saved_token_found' }));
            } else {
                // To log the token use JSON.parse(userData).token as the token obj is stored as string in memory
                dispatch(AuthActions.getSuccessSignIn({ token: userData.token }));
            }
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={BaseStyles.colors.black} />
        </View>
    );
};

export default StartupScreen;

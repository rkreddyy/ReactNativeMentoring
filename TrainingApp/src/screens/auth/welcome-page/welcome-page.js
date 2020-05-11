import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import styles, { BackgroundGradientColors } from './styles';
import LoadingIndicator from '../../common/loading-indicator/loading-indicator';
import { BaseStyles } from '../../../app.styles';
import { AUTH_ROUTES } from '../../../navigation/routes';

const animationDuration = 2000;

const show = opacity => {
    opacity.setValue(0);
    Animated.timing(opacity, {
        toValue: 1,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start();
};

const opacity = new Animated.Value(0);

const WelcomePage = ({ navigation }) => {
    const { isTokenChecked, isTokenAlive } = useSelector(state => state.auth);

    useEffect(() => {
        show(opacity);
    }, []);

    useEffect(() => {
        if (isTokenChecked && !isTokenAlive) {
            navigation.navigate(AUTH_ROUTES.SING_IN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTokenChecked]);

    return (
        <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
            <Animated.Text style={[styles.title, { opacity: opacity }]}> Welcome to Ecommerce Store</Animated.Text>
            <LoadingIndicator color={BaseStyles.colors.lightBlue} />
        </LinearGradient>
    );
};

export default WelcomePage;

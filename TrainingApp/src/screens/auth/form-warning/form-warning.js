import React, { useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';

import styles from './styles';

const animationDuration = 1500;

const show = warningOpacity => {
    warningOpacity.setValue(0);
    Animated.timing(warningOpacity, {
        toValue: 1,
        duration: animationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start();
};

const slideLeft = warningMarginLeft => {
    warningMarginLeft.setValue(200);
    Animated.timing(warningMarginLeft, {
        toValue: 0,
        duration: animationDuration,
        easing: Easing.bounce,
        useNativeDriver: true,
    }).start();
};

const warningOpacity = new Animated.Value(0);
const warningMarginLeft = new Animated.Value(200);

const FormWarning = ({ error }) => {
    useEffect(() => {
        show(warningOpacity);
        slideLeft(warningMarginLeft);
    }, [error]);

    return (
        <View style={styles.errorContainer}>
            <Animated.Text
                style={[
                    styles.error,
                    {
                        opacity: warningOpacity,
                        transform: [
                            {
                                translateX: warningMarginLeft,
                            },
                        ],
                    },
                ]}>
                {error}
            </Animated.Text>
        </View>
    );
};

export default FormWarning;

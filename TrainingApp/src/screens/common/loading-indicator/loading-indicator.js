import React from 'react';
import { View, Animated, Easing } from 'react-native';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';

const animationDuration = 150;
const animationDelay = 100;
const startTranslateY = 0;
const endTranslateY = -10;

const startAnimation = pointsTranslateY => {
    pointsTranslateY.forEach(translateY => {
        translateY.setValue(startTranslateY);
    });
    Animated.stagger(
        animationDelay,
        [Animated.delay(0)].concat(
            pointsTranslateY.map(pointTranslateY =>
                Animated.sequence([
                    Animated.timing(pointTranslateY, {
                        toValue: endTranslateY,
                        duration: animationDuration,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pointTranslateY, {
                        toValue: startTranslateY,
                        duration: animationDuration,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }),
                ]),
            ),
        ),
    ).start(() => {
        pointsTranslateY.forEach(translateY => {
            translateY.setValue(startTranslateY);
        });
        startAnimation(pointsTranslateY);
    });
};

const getPointsAnimatedValues = pointsCount => {
    return Array.from(Array(pointsCount).keys()).map(() => new Animated.Value(startTranslateY));
};

let pointsAnimatedValues = [];
let animatedPoints = [];

const LoadingIndicator = ({ pointsCount = 4, color = BaseStyles.colors.white }) => {
    pointsAnimatedValues = getPointsAnimatedValues(pointsCount);
    animatedPoints = pointsAnimatedValues.map((pointTranslateY, index) => (
        <Animated.View
            key={index}
            style={[
                styles.point,
                {
                    backgroundColor: color,
                    transform: [
                        {
                            translateY: pointTranslateY,
                        },
                    ],
                },
            ]}
        />
    ));
    startAnimation(pointsAnimatedValues);
    return <View style={styles.wrapper}>{animatedPoints}</View>;
};

export default LoadingIndicator;

import React from 'react';
import { TouchableHighlight, Text, LayoutAnimation } from 'react-native';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import LoadingIndicator from '../loading-indicator/loading-indicator';

const ButtonWithLoading = ({ isLoading, onPress, isError, defaultLabel, errorLabel }) => {
    return (
        <TouchableHighlight
            style={isLoading ? styles.signInButtonCollapsed : styles.signInButton}
            underlayColor={BaseStyles.colors.lightBlue}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => {
                LayoutAnimation.easeInEaseOut();
                if (!isLoading) {
                    onPress();
                }
            }}>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <Text style={styles.signInText}>{isError ? errorLabel : defaultLabel}</Text>
            )}
        </TouchableHighlight>
    );
};

export default ButtonWithLoading;

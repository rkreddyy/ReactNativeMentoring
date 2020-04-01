import React from 'react';
import { View, Text } from 'react-native';
import { warningStyles } from './style';

export const AuthWarning = props => (
    <View style={warningStyles.errorContainer}>
        <Text style={warningStyles.error}>{props.error}</Text>
    </View>
);

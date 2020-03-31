import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export const FormWarning = props => (
    <View style={style.errorContainer}>
        <Text style={style.error}>{props.error}</Text>
    </View>
);

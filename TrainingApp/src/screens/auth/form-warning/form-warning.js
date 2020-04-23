import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const FormWarning = props => (
    <View style={styles.errorContainer}>
        <Text style={styles.error}>{props.error}</Text>
    </View>
);

export default FormWarning;

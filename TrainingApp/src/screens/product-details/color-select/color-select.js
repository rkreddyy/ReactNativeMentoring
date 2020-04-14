import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

const ColorSelect = ({ colors }) => (
    <View>
        <View style={styles.selectColorHeaderWrapper}>
            <Text style={styles.selectColorHeader}>Select Color</Text>
        </View>
        <FlatList
            style={styles.selectColorsWrapper}
            horizontal={true}
            data={colors}
            renderItem={({ item }) => (
                <TouchableOpacity id={item.id} style={styles.selectColorItem}>
                    <Text style={styles.selectColorItemText}>{item.name}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={color => color.id}
        />
    </View>
);

export default ColorSelect;

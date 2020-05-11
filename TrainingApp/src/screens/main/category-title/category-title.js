import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { XmlEntities } from 'html-entities';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';

const entities = new XmlEntities();

const CategoryTitle = ({ category, openCategoryProductList }) => {
    return (
        <TouchableOpacity
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => {
                openCategoryProductList(category);
            }}>
            <View style={styles.group}>
                <View style={styles.groupImageWrapper}>
                    <Image source={{ uri: `http:${category.thumb}` }} style={styles.groupImage} />
                </View>
                <Text style={BaseStyles.groupName}>{entities.decode(category.name)}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryTitle;

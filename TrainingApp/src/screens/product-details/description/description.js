import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';

const ProductDescription = ({ description, wishList, addToCart }) => (
    <View style={styles.wrapper}>
        <Text style={styles.header}>Description:</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.controlsWrapper}>
            <View style={styles.wishListWrapper}>
                <TouchableHighlight
                    underlayColor={BaseStyles.colors.lightBlue}
                    activeOpacity={0.5}
                    onPress={() => {
                        wishList();
                    }}>
                    <View style={styles.wishList}>
                        <FontAwesomeIcon
                            style={styles.heartIcon}
                            icon={faHeart}
                            size={BaseStyles.fontSize.m}
                            color={BaseStyles.colors.lightBlue}
                        />
                        <Text style={styles.wishListText}>Wish List</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.addToCartWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        addToCart();
                    }}>
                    <View style={styles.addToCart}>
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default ProductDescription;

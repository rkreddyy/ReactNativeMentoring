import React from 'react';
import { View, Image, Text } from 'react-native';

import Styles from './styles';

const Product = props => {
    getPriceString = (item) => {
        return `$${item.price}`;
    }

    getOldPriceString = (item) => {
        return `$${item.oldPrice}`;
    }

    getDiscountString = (item) => {
        return `${item.discount}% Off`;
    }

    return (
        <View style={Styles.wrapper}>
            <View style={Styles.imageWrapper}>
                <Image source={props.item.source} style={Styles.image} />
            </View>
            <Text>{props.item.name}</Text>
            <View style={Styles.priceWrapper}>
                <Text style={Styles.price}>{getPriceString(props.item)}</Text>
                <Text style={Styles.oldPrice}>{getOldPriceString(props.item)}</Text>
                <Text style={Styles.discount}>{getDiscountString(props.item)}</Text>
            </View>
        </View>
    );
}

export default Product;

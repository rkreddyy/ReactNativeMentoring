import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

import Styles from './styles';

export default class Product extends Component {
    getPriceString(item) {
        return `$${item.price}`;
    }

    getOldPriceString(item) {
        return `$${item.oldPrice}`;
    }

    getDiscountString(item) {
        return `${item.discount}% Off`;
    }

    render() {
        return (
            <View style={Styles.wrapper}>
                <View style={Styles.imageWrapper}>
                    <Image source={this.props.item.source} style={Styles.image} />
                </View>
                <Text>{this.props.item.name}</Text>
                <View style={Styles.priceWrapper}>
                    <Text style={Styles.price}>{this.getPriceString(this.props.item)}</Text>
                    <Text style={Styles.oldPrice}>{this.getOldPriceString(this.props.item)}</Text>
                    <Text style={Styles.discount}>{this.getDiscountString(this.props.item)}</Text>
                </View>
            </View>
        );
    }
}

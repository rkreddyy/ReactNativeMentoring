import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const getPriceString = item => {
    return `$${item.price}`;
};

// function getOldPriceString(item) {
//     return `$${item.oldPrice}`;
// }

// function getDiscountString(item) {
//     return `${item.discount}% Off`;
// }

const getStockButton = isExtended =>
    isExtended ? (
        <TouchableOpacity
            onPress={() => {
                this.stock();
            }}>
            <View style={isExtended ? styles.stockWrapperExpanded : styles.stockWrapper}>
                <Text style={isExtended ? styles.stockExpanded : styles.stock}>In Stock</Text>
            </View>
        </TouchableOpacity>
    ) : null;

const Product = ({ isExtended, item, gotoProductDetails }) => {
    if (item.isEmpty) {
        return <View style={styles.emptyItem} />;
    }
    return (
        <TouchableOpacity
            style={isExtended ? styles.wrapperExpanded : styles.wrapper}
            onPress={() => (isExtended ? null : gotoProductDetails(item))}>
            <View style={isExtended ? styles.imageWrapperExpanded : styles.imageWrapper}>
                <Image
                    source={{ uri: `http:${item.cell.thumb}` }}
                    style={isExtended ? styles.imageExpanded : styles.image}
                />
            </View>
            {getStockButton(isExtended)}
            {/* {this.getControlsGSX()} */}
            <Text style={isExtended ? styles.nameExpanded : styles.name}>{item.cell.name}</Text>
            <View style={isExtended ? styles.priceWrapperExpanded : styles.priceWrapper}>
                <Text style={isExtended ? styles.priceExpanded : styles.price}>{getPriceString(item.cell)}</Text>
                {/* <Text style={this.styles.oldPrice}>{this.getOldPriceString(this.props.item.cell)}</Text> */}
                {/* <Text style={this.styles.discount}>{this.getDiscountString(this.props.item.cell)}</Text> */}
            </View>
        </TouchableOpacity>
    );
};

export default Product;

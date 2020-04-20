import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../../common/product/product';

class ProductList extends Component {

    renderGroupHeaderJSX() {
        return (
            <View style={styles.itemsHeader}>
                <Text style={styles.itemsHeaderTitle}>{this.props.currentGroup.name}</Text>
                <TouchableHighlight
                    style={styles.viewAllButton}
                    hitSlop={BaseStyles.buttonHitSlop}
                    underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                    onPress={() => this.viewAllGroupItems()}>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableHighlight>
            </View>
        );
    }

    getProducts() {
        return this.props.currentGroup.items.map(item => (
            <Product
                item={item}
                key={item.id}
                gotoProductDetails={() => {
                    this.props.gotoProductDetails(item);
                }}
            />
        ));
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View>{this.renderGroupHeaderJSX()}</View>
                <View style={styles.productsWrapper}>{this.getProducts()}</View>
            </View>
        );
    }
}

export default ProductList;

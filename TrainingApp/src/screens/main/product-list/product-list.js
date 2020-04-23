import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../../common/product/product';

class ProductList extends Component {

    static propTypes = {
        currentGroup: PropTypes.object,
        gotoProductDetails: PropTypes.func,
    };

    renderGroupHeaderJSX() {
        return (
            <View style={styles.itemsHeader}>
                <Text style={styles.itemsHeaderTitle}>{this.props.currentGroup.name}</Text>
                <TouchableHighlight
                    style={styles.viewAllButton}
                    hitSlop={BaseStyles.buttonHitSlop}
                    underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                    onPress={() => { }}>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableHighlight>
            </View>
        );
    }

    renderProducts() {
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
                <View style={styles.productsWrapper}>{this.renderProducts()}</View>
            </View>
        );
    }
}

export default ProductList;

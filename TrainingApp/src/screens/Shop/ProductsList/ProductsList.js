import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../Product';

export default class ProductList extends Component {
    viewAllGroupItems() { }

    getGroupHeaderJSX() {
        return (
            <View style={Styles.itemsHeader}>
                <Text style={Styles.itemsHeaderTitle}>{this.props.currentGroup.name}</Text>
                <TouchableHighlight
                    style={Styles.viewAllButton}
                    hitSlop={BaseStyles.buttonHitSlop}
                    underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                    onPress={() => this.viewAllGroupItems()}>
                    <Text style={Styles.viewAllText}>View all</Text>
                </TouchableHighlight>
            </View>
        );
    }

    getProducts() {
        return this.props.currentGroup.items.map(item => <Product item={item} key={item.id} />);
    }

    render() {
        return (
            <View style={Styles.wrapper}>
                <View>{this.getGroupHeaderJSX()}</View>
                <View style={Styles.productsWrapper}>{this.getProducts()}</View>
            </View>
        );
    }
}

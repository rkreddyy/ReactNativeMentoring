import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../../Product';

const Products = props => {
    viewAllGroupItems = () => { }

    getGroupHeaderJSX = () => {
        return (
            <View style={Styles.itemsHeader}>
                <Text style={Styles.itemsHeaderTitle}>{props.currentGroup.name}</Text>
                <TouchableHighlight
                    style={Styles.viewAllButton}
                    hitSlop={BaseStyles.buttonHitSlop}
                    underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                    onPress={() => viewAllGroupItems()}>
                    <Text style={Styles.viewAllText}>View all</Text>
                </TouchableHighlight>
            </View>
        );
    }

    getProducts = () => {
        return props.currentGroup.items.map(item => <Product item={item} key={item.id} />);
    }

    return (
        <View style={Styles.wrapper}>
            <View>{getGroupHeaderJSX()}</View>
            <View style={Styles.productsWrapper}>{getProducts()}</View>
        </View>
    );
}

export default Products;

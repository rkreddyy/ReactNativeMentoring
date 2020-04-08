import React from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Styles from './styles';
import { BaseStyles } from '../../app.styles';
import Search from '../Search';
import Group from './Group';
import ProductList from './ProductsList';
import shopData from '../../mock/shop-data'

const Shop = props => {

    let groups = shopData,
        currentGroup = shopData[0];

    openMenu = () => {
        props.navigation.openDrawer();
    }

    openWishList = () => { }

    onSearch = (text) => {
        return text;
    }

    getGroupsJSX = () => {
        return groups.map(group => {
            return <Group group={group} key={group.id} />;
        });
    }

    return (
        <View style={Styles.main.wrapper}>
            <View style={Styles.main.header}>
                <TouchableHighlight
                    style={Styles.main.menuButton}
                    underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                    hitSlop={BaseStyles.buttonHitSlop}
                    onPress={() => openMenu()}>
                    <FontAwesomeIcon icon={faBars} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
                </TouchableHighlight>
                <Text style={Styles.main.title}>Ecommerce Store</Text>
                <TouchableHighlight
                    style={Styles.main.menuButton}
                    hitSlop={BaseStyles.buttonHitSlop}
                    underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                    onPress={() => openWishList()}>
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        size={BaseStyles.fontSize.l}
                        color={BaseStyles.colors.white}
                    />
                </TouchableHighlight>
            </View>
            <View style={Styles.main.search}>
                <Search />
            </View>
            <View style={Styles.main.groupsScrollable}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.main.groups}>{getGroupsJSX()}</View>
                </ScrollView>
            </View>
            <View style={Styles.main.divider} />
            <View style={Styles.main.items}>
                <ProductList currentGroup={currentGroup} />
            </View>
        </View>
    );
}

export default Shop;

import React from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Styles from './styles';
import { BaseStyles } from '../../app.styles';
import Search from '../Search';
import Group from '../Group';
import ProductList from '../Products';
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

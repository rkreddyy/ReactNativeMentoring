import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Styles from './styles';
import { BaseStyles } from '../../app.styles';
import Search from '../Search';
import Group from './Group';
import ProductList from './ProductsList';

export default class Shop extends Component {
    constructor() {
        super();
        this.groups = [
            {
                id: 'dsfvdsfvdsfv',
                name: 'Electronics',
                source: require('../../images/electronics1.jpg'),
                items: [
                    {
                        id: 'servevesrvsrverv',
                        name: 'Phone 1',
                        price: 233,
                        oldPrice: 250,
                        discount: 10,
                        source: require('../../images/Phone1.jpg'),
                    },
                    {
                        id: 'servevessdcsdcrvsrverv',
                        name: 'Phone 2',
                        price: 233,
                        oldPrice: 250,
                        discount: 10,
                        source: require('../../images/Phone1.jpg'),
                    },
                    {
                        id: 'servevesrvssdcsdcrverv',
                        name: 'Phone 3',
                        price: 233,
                        oldPrice: 250,
                        discount: 10,
                        source: require('../../images/Phone1.jpg'),
                    },
                ],
            },
            { id: 'efvedvevewvr', name: 'Cloth', source: require('../../images/cloth.jpg') },
            { id: 'sdfdscdscvdsfvsdfvsdf', name: 'Furniture', source: require('../../images/furniture.jpg') },
            { id: 'easdcsdcfvedvevewvr', name: 'Electronics', source: require('../../images/electronics1.jpg') },
            { id: 'efvedveveasdcsadcwvr', name: 'Cloth', source: require('../../images/cloth.jpg') },
            { id: 'efveevervdvevewvr', name: 'Furniture', source: require('../../images/furniture.jpg') },
        ];
        this.currentGroup = this.groups[0];
    }
    openMenu() {}

    openWishList() {}

    onSearch(text) {
        return text;
    }

    getGroupsJSX() {
        return this.groups.map(group => {
            return <Group group={group} key={group.id} />;
        });
    }

    render() {
        return (
            <View style={Styles.main.wrapper}>
                <View style={Styles.main.header}>
                    <TouchableHighlight
                        style={Styles.main.menuButton}
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => this.openMenu()}>
                        <FontAwesomeIcon icon={faBars} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
                    </TouchableHighlight>
                    <Text style={Styles.main.title}>Ecommerce Store</Text>
                    <TouchableHighlight
                        style={Styles.main.menuButton}
                        hitSlop={BaseStyles.buttonHitSlop}
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        onPress={() => this.openWishList()}>
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
                        <View style={Styles.main.groups}>{this.getGroupsJSX()}</View>
                    </ScrollView>
                </View>
                <View style={Styles.main.divider} />
                <View style={Styles.main.items}>
                    <ProductList currentGroup={this.currentGroup} />
                </View>
            </View>
        );
    }
}

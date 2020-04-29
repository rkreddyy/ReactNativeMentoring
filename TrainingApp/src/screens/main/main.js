import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import Group from './group/group';
import ProductList from './product-list/product-list';
import styles from './styles';
import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import { PRODUCTS } from '../../utils/shop-data';
import { MAIN_ROUTES } from '../../navigation/routes';

class Main extends Component {
    constructor() {
        super();
        this.groups = PRODUCTS;
        this.currentGroup = this.groups[0];
    }

    openMenu() {
        this.props.navigation.openDrawer();
    }

    getGroupsJSX() {
        return this.groups.map(group => {
            return <Group group={group} key={group.id} />;
        });
    }

    gotoProductDetails(product) {
        this.props.navigation.navigate(MAIN_ROUTES.PRODUCT_DETAILS.name, { product: product });
    }

    getTitle() {
        return 'Products';
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Header
                    title={this.getTitle()}
                    needToShowMenuButton={true}
                    openMenu={() => {
                        this.openMenu();
                    }}
                />
                <View style={styles.groupsScrollable}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.groups}>{this.getGroupsJSX()}</View>
                    </ScrollView>
                </View>
                <Divider />
                <View style={styles.items}>
                    <ProductList
                        currentGroup={this.currentGroup}
                        gotoProductDetails={product => {
                            this.gotoProductDetails(product);
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default Main;

import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';

import Styles from './styles';
import { BaseStyles } from '../../app.styles';
import Search from '../Search';
import Group from '../Group';
import shopData from '../../mock/shop-data'
import ProductGridItem from '../../components/ProductGridItem';
import { ROUTES } from '../../constants/routes';

const Shop = props => {

    let groups = shopData,
        currentGroup = shopData[0];

    const getGroupsJSX = () => {
        return groups.map(group => {
            return <Group group={group} key={group.id} />;
        });
    }

    const renderItem = ({ item: product }) => {
        return (
            <ProductGridItem
                product={product}
                onPress={onItemPress}
            />
        );
    };

    const onItemPress = item => {
        props.navigation.navigate(ROUTES.PRODUCT, { product: item });
    };

    // return (
    //     <View style={Styles.main.wrapper}>
    //         <View style={Styles.main.search}>
    //             <Search />
    //         </View>
    //         <View style={Styles.main.groupsScrollable}>
    //             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    //                 <View style={Styles.main.groups}>{getGroupsJSX()}</View>
    //             </ScrollView>
    //         </View>
    //         <View style={Styles.main.divider} />
    //         <View style={Styles.main.items}>
    //             <ProductList currentGroup={currentGroup} />
    //         </View>
    //     </View>
    // );

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
            <FlatList
                style={Styles.list}
                contentContainerStyle={Styles.list}
                data={currentGroup.items}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={Styles.separator} />}
                keyExtractor={product => product.id}
            />
        </View>
    );
}

export default Shop;

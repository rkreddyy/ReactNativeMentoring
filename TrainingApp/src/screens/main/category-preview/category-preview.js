import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import { XmlEntities } from 'html-entities';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../../components/product/product';

const COLUMNS_NUMBER = 2;

const entities = new XmlEntities();

const getCategoryHeader = ({ category, openCategoryProductList }) => (
    <View style={styles.itemsHeader}>
        <Text style={styles.itemsHeaderTitle}>{entities.decode(category.name)}</Text>
        <TouchableHighlight
            style={styles.viewAllButton}
            hitSlop={BaseStyles.buttonHitSlop}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            onPress={() => {
                openCategoryProductList(category);
            }}>
            <Text style={styles.viewAllText}>View all</Text>
        </TouchableHighlight>
    </View>
);

const formatListData = (products, numberOfColumns) => {
    if (!products) {
        return;
    }
    const numberOfRows = Math.floor(products.length / numberOfColumns);
    const numberOfItemsInFullRow = numberOfColumns * numberOfRows;
    const numberOfItemsInLastNotFullRow = products.length - numberOfItemsInFullRow;

    if (!numberOfItemsInLastNotFullRow) {
        return products;
    }

    const numberOfEmptyItemsToAdd = numberOfColumns - numberOfItemsInLastNotFullRow;

    return [...products, ...Array.from({ length: numberOfEmptyItemsToAdd }).map(() => ({ isEmpty: true }))];
};

const CategoryPreview = ({ category, products, gotoProductDetails, openCategoryProductList }) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                ListHeaderComponent={() => getCategoryHeader({ category, openCategoryProductList })}
                data={formatListData(products, COLUMNS_NUMBER)}
                renderItem={({ item }) => {
                    return (
                        <Product
                            item={item}
                            key={item.id}
                            gotoProductDetails={() => {
                                gotoProductDetails(item);
                            }}
                        />
                    );
                }}
                keyExtractor={item => item.id}
                numColumns={COLUMNS_NUMBER}
                columnWrapperStyle={styles.column}
                style={styles.flatList}
            />
        </View>
    );
};

export default CategoryPreview;

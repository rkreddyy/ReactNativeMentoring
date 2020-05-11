import React, { useEffect } from 'react';
import { RefreshControl, FlatList, View, Image, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { XmlEntities } from 'html-entities';

import Header from '../common/header/header';
import Warning from '../auth/form-warning/form-warning';
import { ProductListActions, fetchProducts, refreshProducts, loadMoreProducts } from './product-list.slice';
import { BaseStyles } from '../../app.styles';

import styles from './styles';
import { MAIN_ROUTES } from '../../navigation/routes';
import LoadingIndicator from '../common/loading-indicator/loading-indicator';

const entities = new XmlEntities();

const renderProduct = ({ product, navigation }) => {
    return (
        <TouchableHighlight
            onPress={() => gotoProductDetails({ navigation, product: product.item, ROUTES: MAIN_ROUTES })}>
            <View style={styles.productWrapper}>
                <Image source={{ uri: `http:${product.item.cell.thumb}` }} style={styles.image} />
                <View style={styles.productInfo}>
                    <Text>{product.item.cell.name}</Text>
                    <Text>{product.item.cell.price}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};
const gotoProductDetails = ({ navigation, product, ROUTES }) => {
    navigation.navigate(ROUTES.PRODUCT_DETAILS.name, { product });
};

const onRefresh = (dispatch, category, chunkNumber) => {
    dispatch(refreshProducts(category.category_id, chunkNumber));
};

const ProductList = ({ route, navigation }) => {
    const category = route.params.category;
    const dispatch = useDispatch();

    const { products, isLoading, error, chunkNumber, totalChunksCount } = useSelector(state => state.productList);

    const isLastChunk = chunkNumber === totalChunksCount;

    useEffect(() => {
        dispatch(fetchProducts(category.category_id, chunkNumber + 1));

        return () => {
            dispatch(ProductListActions.resetState());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });

    return (
        <>
            <Header
                title={entities.decode(category.name)}
                goBack={() => {
                    navigation.goBack();
                }}
                goToCart={goToCart}
            />
            {!error ? (
                <FlatList
                    data={products}
                    renderItem={product => renderProduct({ product, navigation })}
                    keyExtractor={product => product.id}
                    style={styles.wrapper}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => {
                                onRefresh(dispatch, category, chunkNumber);
                            }}
                        />
                    }
                    onEndReached={() => {
                        if (!isLoading && !isLastChunk) {
                            dispatch(loadMoreProducts(category.category_id, chunkNumber + 1));
                        }
                    }}
                    onEndReachedThreshold={0.01}
                />
            ) : null}
            {isLoading ? (
                <LoadingIndicator color={BaseStyles.colors.lightBlue} />
            ) : error ? (
                <Warning error={error} />
            ) : null}
        </>
    );
};

export default ProductList;

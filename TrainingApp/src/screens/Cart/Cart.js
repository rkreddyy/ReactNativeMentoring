import React, { useEffect } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/Foundation';

import styles from './styles';
import Header from '../common/header/header';
import LoadingIndicator from '../common/loading-indicator/loading-indicator';
import { BaseStyles } from '../../app.styles';
import Warning from '../auth/form-warning/form-warning';
import { fetchGetProductsInCart } from './cart.slice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICON_NAMES } from '../../constants/app-constants';
import ButtonWithLoading from '../common/button-with-loading/button-with-loading';
import { MAIN_ROUTES } from '../../navigation/routes';

const renderProduct = ({ product, navigation }) => {
    return (
        <View style={styles.productWrapper}>
            <View style={styles.productContent}>
                <View style={styles.productInfo}>
                    <Text>{product.item.name}</Text>
                    <Text>{product.item.price}</Text>
                </View>
                <Image source={{ uri: `http:${product.item.thumb}` }} style={styles.image} />
            </View>
            <View style={styles.productFooter}>
                <View style={styles.quantity}>
                    <Text>Qty.{product.item.quantity}</Text>
                </View>
                <TouchableOpacity>
                    <IconFA name={ICON_NAMES.TRASH} size={BaseStyles.fontSize.xl} color={BaseStyles.colors.lightGrey} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const renderProductsFooter = (products, totalCost, isLoading, error) => {
    return (
        <>
            <View style={styles.priceDetails}>
                <Text style={styles.priceDetailsTitle}>Price Details</Text>
                <View style={styles.totalCosts}>
                    <Text>Price ({products.length} items)</Text>
                    <Text>{totalCost}</Text>
                </View>
                <View style={styles.priceDetailsTotal}>
                    <Text>Amount Payable</Text>
                    <Text>{totalCost}</Text>
                </View>
            </View>
            <View style={styles.notesContainer}>
                <IconFA5
                    name={ICON_NAMES.SHIELD}
                    size={BaseStyles.fontSize.xxl}
                    color={BaseStyles.colors.warning}
                    style={styles.shield}
                />
                <Text style={styles.notes}>Safe and secure payments. 100% authentic products</Text>
            </View>
            <ButtonWithLoading
                isLoading={isLoading}
                onPress={() => {
                    // requestSignIn(dispatch, {
                    //     email,
                    //     password,
                    //     userName,
                    // });
                }}
                isError={error}
                defaultLabel="Proceed To Payment"
                errorLabel="Try Again"
            />
        </>
    );
};

const Cart = ({ navigation, route }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGetProductsInCart());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { title } = route.params;
    const goBack = () => navigation.goBack();
    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });
    const { isLoading, products, error, totals } = useSelector(store => store.cart);
    const total = totals.find ? totals.find(item => item.id === 'total') : { text: '0' };    const totalCost = total ? total.text : '0';
    return (
        <>
            <Header title={title} goBack={goBack} goToCart={goToCart} />

            {!error ? (
                <FlatList
                    data={products}
                    renderItem={product => renderProduct({ product, navigation })}
                    keyExtractor={product => product.key}
                    style={styles.wrapper}
                    ListFooterComponent={renderProductsFooter(products, totalCost, isLoading, error)}
                    refreshing={isLoading}
                    onRefresh={() => {
                        dispatch(fetchGetProductsInCart());
                    }}
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

export default Cart;

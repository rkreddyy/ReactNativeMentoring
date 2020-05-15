import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import Header from '../components/header/header';
import { MAIN_ROUTES } from '../../navigation/routes';
import { fetchOrders } from './orders.slice';
import LoadingIndicator from '../components/loading-indicator/loading-indicator';
import { BaseStyles } from '../../app.styles';
import FormWarning from '../auth/form-warning/form-warning';

const renderOrder = (order, goToMap) => {
    return (
        <TouchableOpacity
            style={styles.orderWrapper}
            onPress={() => { goToMap(); }}>
            <View style={styles.orderStatus}>
                <Text>Status:</Text>
                <Text>{order.status}</Text>
            </View>
            <View style={styles.orderProductsQuantity}>
                <Text>Products Quantity:</Text>
                <Text>{order.products}</Text>
            </View>
            <View style={styles.orderTotal}>
                <Text>Total Cost:</Text>
                <Text>{order.total}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Orders = ({ navigation, route }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { title } = route.params;
    const goBack = () => navigation.goBack();
    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });
    const goToMap = () => navigation.navigate(MAIN_ROUTES.MAP.name);
    const { isLoading, error, orders } = useSelector(store => store.orders);
    return (
        <>
            <Header title={title} goBack={goBack} goToCart={goToCart} />

            {!error ? (
                <FlatList
                    data={orders}
                    renderItem={order => renderOrder(order.item, goToMap)}
                    keyExtractor={order => order.order_id}
                    style={styles.wrapper}
                    refreshing={isLoading}
                    onRefresh={() => {
                        dispatch(fetchOrders());
                    }}
                />
            ) : null}
            {isLoading ? (
                <LoadingIndicator color={BaseStyles.colors.lightBlue} />
            ) : error ? (
                <FormWarning error={error} />
            ) : null}
        </>
    );
};

export default Orders;

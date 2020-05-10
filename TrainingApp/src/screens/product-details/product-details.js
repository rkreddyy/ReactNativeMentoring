import React from 'react';
import { ScrollView } from 'react-native';
import { XmlEntities } from 'html-entities';
import htmlToText from 'html-to-text';
import { useDispatch } from 'react-redux';

import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import Product from '../common/product/product';
import ProductDescription from './description/description';
import { fetchAddProductToCart } from '../cart/cart.slice';
import { MAIN_ROUTES } from '../../navigation/routes';

const entities = new XmlEntities();

const addToWishList = () => {};

const addToCart = ({ product, dispatch }) => {
    dispatch(fetchAddProductToCart({ product }));
};

const goBack = navigation => {
    navigation.goBack();
};

const getTitle = product => {
    return product.cell.name;
};

const ProductDetails = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const product = route.params.product;
    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });

    return (
        <>
            <Header
                title={getTitle(product)}
                goBack={() => {
                    goBack(navigation);
                }}
                goToCart={goToCart}
            />

            <ScrollView>
                <Product item={product} isExtended={true} />
                <Divider />
                <Divider />
                <ProductDescription
                    description={htmlToText.fromString(entities.decode(product.cell.description))}
                    wishList={() => {
                        addToWishList();
                    }}
                    addToCart={() => {
                        addToCart({ product, dispatch });
                    }}
                />
            </ScrollView>
        </>
    );
};

export default ProductDetails;

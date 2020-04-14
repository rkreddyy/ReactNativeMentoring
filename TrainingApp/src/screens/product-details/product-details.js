import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import Product from '../common/product/product';
import ColorSelect from './color-select/color-select';
import ProductDescription from './description/description';

class ProductDetails extends Component {
    getPriceString(item) {
        return `$${item.price}`;
    }

    getOldPriceString(item) {
        return `$${item.oldPrice}`;
    }

    getDiscountString(item) {
        return `${item.discount}% Off`;
    }

    addToWishList() {}

    addToCart() {}

    goBack() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <Product item={this.props.route.params.product} isExtended={true} />
                <Divider />
                <ColorSelect colors={this.props.route.params.product.colors} />
                <Divider />
                <ProductDescription
                    description={this.props.route.params.product.description}
                    wishList={() => {
                        this.addToWishList();
                    }}
                    addToCart={() => {
                        this.addToCart();
                    }}
                />
            </ScrollView>
        );
    }
}

export default ProductDetails;

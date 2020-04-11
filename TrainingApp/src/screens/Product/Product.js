import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import Button from "../../components/Button"
import Text from "../../components/Text"
import ProductImage from '../../components/ProductImage'
import Styles from './styles'
import { getPriceString, getDiscountString } from '../../utils/formatPrice'

const Product = props => {
    const [loading, setLoading] = useState(false);
    const { product } = props.route.params;
    const { navigation } = props;
    navigation.setOptions({
        title: product.name
    });

    const onPress = async () => {
        setLoading(true);

        // Wait 5 seconds
        await new Promise(res => {
            setTimeout(res, 5000);
        });

        setLoading(false);
        navigation.goBack();
    };

    return (
        // <View style={Styles.wrapper}>
        //     <View style={Styles.imageWrapper}>
        //         <Image source={props.item.source} style={Styles.image} />
        //     </View>
        //     <Text>{props.item.name}</Text>
        //     <View style={Styles.priceWrapper}>
        //         <Text style={Styles.price}>{getPriceString(props.item)}</Text>
        //         <Text style={Styles.oldPrice}>{getOldPriceString(props.item)}</Text>
        //         <Text style={Styles.discount}>{getDiscountString(props.item)}</Text>
        //     </View>
        // </View>

        <>
            <ScrollView
                style={Styles.container}
                contentContainerStyle={Styles.contentContainer}>
                <ProductImage product={product} />
                <View style={Styles.priceWrapper}>
                    <Text style={Styles.price}>{getPriceString(product.price)}</Text>
                    <Text style={Styles.oldPrice}>{getPriceString(product.oldPrice)}</Text>
                    <Text style={Styles.discount}>{getDiscountString(product.discount)}</Text>
                </View>
                <Text.TITLE style={Styles.title}>{product.name}</Text.TITLE>
                <Text>{product.description}</Text>
            </ScrollView>
            <Button loading={loading} onPress={onPress} title="Add to cart" />
        </>
    );
}

export default Product;

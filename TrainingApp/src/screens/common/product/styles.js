import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const ProductStyles = StyleSheet.create({
    wrapper: {
        marginRight: 'auto',
        flexBasis: 190,
        flexShrink: 2,
        marginBottom: BaseStyles.margin.xs,
        padding: BaseStyles.padding.m,

        borderRadius: 5,
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightGrey,
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        overflow: 'hidden',
        marginTop: BaseStyles.margin.s,
    },
    image: {
        height: 90,
        width: 40,
    },
    priceWrapper: {
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
    },
    oldPrice: {
        marginLeft: BaseStyles.margin.xs,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
    },
    discount: {
        marginLeft: BaseStyles.margin.xs,
        color: BaseStyles.colors.blue,
        fontWeight: 'bold',
    },
});

export const ExtendedStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        margin: BaseStyles.margin.xs,
        padding: BaseStyles.padding.m,
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        overflow: 'hidden',
        marginTop: BaseStyles.margin.s,
    },
    image: {
        height: 250,
        width: 120,
    },
    priceWrapper: {
        flexDirection: 'row',
    },
    name: {
        fontSize: BaseStyles.fontSize.m,
    },
    price: {
        fontWeight: 'bold',
        fontSize: BaseStyles.fontSize.m,
    },
    oldPrice: {
        marginLeft: BaseStyles.margin.xs,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        fontSize: BaseStyles.fontSize.m,
    },
    discount: {
        marginLeft: BaseStyles.margin.xs,
        color: BaseStyles.colors.blue,
        fontWeight: 'bold',
        fontSize: BaseStyles.fontSize.m,
    },
    controlsWrapper: {
        flex: 1,
        flexDirection: 'row',
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: BaseStyles.margin.s,
    },
    control: {
        backgroundColor: BaseStyles.colors.lightBlue,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: BaseStyles.margin.xs,
    },
    controlActive: {
        backgroundColor: BaseStyles.colors.lightBlue,
        width: 15,
        height: 15,
        borderRadius: 15,
        margin: BaseStyles.margin.xs,
    },
    stock: {
        color: BaseStyles.colors.white,
    },
    stockWrapper: {
        backgroundColor: BaseStyles.colors.lightBlue,
        padding: BaseStyles.padding.xs,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
});

export default ProductStyles;

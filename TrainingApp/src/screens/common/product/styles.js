import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const ProductStyles = StyleSheet.create({
    emptyItem: {
        marginHorizontal: 5,
        backgroundColor: BaseStyles.colors.transparent,
        flexBasis: 100,
        flexGrow: 10,
        flexShrink: 2,
        marginBottom: BaseStyles.margin.xs,
        padding: BaseStyles.padding.m,
    },
    wrapper: {
        // flex: 1,
        marginHorizontal: 5,
        flexBasis: 100,
        flexGrow: 10,
        flexShrink: 2,
        marginBottom: BaseStyles.margin.xs,
        padding: BaseStyles.padding.m,

        borderRadius: 5,
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightGrey,
        backgroundColor: BaseStyles.colors.white,
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
        width: 90,
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

    wrapperExpanded: {
        flex: 1,
        padding: BaseStyles.padding.m,
        backgroundColor: BaseStyles.colors.white,
    },
    imageWrapperExpanded: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        overflow: 'hidden',
        marginTop: BaseStyles.margin.s,
    },
    imageExpanded: {
        height: 250,
        width: 250,
    },
    priceWrapperExpanded: {
        flexDirection: 'row',
    },
    nameExpanded: {
        fontSize: BaseStyles.fontSize.m,
    },
    priceExpanded: {
        fontWeight: 'bold',
        fontSize: BaseStyles.fontSize.m,
    },
    oldPriceExpanded: {
        marginLeft: BaseStyles.margin.xs,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        fontSize: BaseStyles.fontSize.m,
    },
    discountExpanded: {
        marginLeft: BaseStyles.margin.xs,
        color: BaseStyles.colors.blue,
        fontWeight: 'bold',
        fontSize: BaseStyles.fontSize.m,
    },
    controlsWrapperExpanded: {
        flex: 1,
        flexDirection: 'row',
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: BaseStyles.margin.s,
    },
    controlExpanded: {
        backgroundColor: BaseStyles.colors.lightBlue,
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: BaseStyles.margin.xs,
    },
    controlActiveExpanded: {
        backgroundColor: BaseStyles.colors.lightBlue,
        width: 15,
        height: 15,
        borderRadius: 15,
        margin: BaseStyles.margin.xs,
    },
    stockExpanded: {
        color: BaseStyles.colors.white,
    },
    stockWrapperExpanded: {
        backgroundColor: BaseStyles.colors.lightBlue,
        padding: BaseStyles.padding.xs,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
});

export const ExtendedStyles = StyleSheet.create({});

export default ProductStyles;

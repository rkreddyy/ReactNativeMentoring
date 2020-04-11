import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../app.styles';

const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contentContainer: {
        padding: 16,
    },

    image: {
        alignSelf: 'center',
    },

    title: {
        paddingVertical: 8,
    },
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
    // image: {
    //     height: 90,
    //     width: 40,
    // },
    priceWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
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

export default ProductStyles;

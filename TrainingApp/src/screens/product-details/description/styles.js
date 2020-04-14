import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../../app.styles';
import { batch } from 'react-redux';

const styles = StyleSheet.create({
    wrapper: {
        margin: BaseStyles.margin.s,
    },
    header: {
        color: BaseStyles.colors.lightBlue,
        fontSize: BaseStyles.fontSize.m,
        fontWeight: 'bold',
    },
    description: {
        paddingTop: BaseStyles.padding.s,
        paddingBottom: BaseStyles.padding.s,
        marginBottom: BaseStyles.margin.s,
        fontSize: BaseStyles.fontSize.s,
    },

    controlsWrapper: {
        flex: 1,
        flexDirection: 'row',
    },

    wishListWrapper: {
        flexGrow: 1,
        flexBasis: 1,
    },
    addToCartWrapper: {
        flexGrow: 1,
        flexBasis: 1,
    },

    addToCart: {
        padding: BaseStyles.padding.l,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BaseStyles.colors.lightBlue,
    },
    wishList: {
        flexDirection: 'row',
        padding: BaseStyles.padding.l,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addToCartText: {
        color: BaseStyles.colors.white,
        fontSize: BaseStyles.fontSize.s,
    },
    wishListText: {
        color: BaseStyles.colors.black,
        fontSize: BaseStyles.fontSize.s,
    },

    heartIcon: {
        marginRight: BaseStyles.margin.s,
    },
});

export default styles;

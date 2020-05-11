import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../app.styles';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: BaseStyles.colors.white,
        paddingLeft: BaseStyles.padding.m,
        paddingRight: BaseStyles.padding.m,
    },
    orderWrapper: {
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightGrey,
        borderRadius: 5,
        marginTop: BaseStyles.margin.xs,
        padding: BaseStyles.padding.s,
        paddingLeft: BaseStyles.padding.l,
        paddingRight: BaseStyles.padding.l,
    },
    orderStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderProductsQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;

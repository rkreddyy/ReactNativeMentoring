import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../app.styles';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: BaseStyles.colors.white,
        paddingLeft: BaseStyles.padding.m,
        paddingRight: BaseStyles.padding.m,
    },
    spinner: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    productWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightGrey,
        borderRadius: 5,
        marginTop: BaseStyles.margin.xs,
        padding: BaseStyles.padding.s,
    },
    image: {
        width: 100,
        height: 100,
    },
    productInfo: {
        flexBasis: 300,
        paddingLeft: BaseStyles.padding.l,
        paddingRight: BaseStyles.padding.l,
    },
    name: {},
    price: {},
});

export default styles;

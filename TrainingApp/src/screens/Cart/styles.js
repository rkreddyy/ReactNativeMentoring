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
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightGrey,
        borderRadius: 5,
        marginTop: BaseStyles.margin.xs,
        padding: BaseStyles.padding.s,
        paddingLeft: BaseStyles.padding.l,
        paddingRight: BaseStyles.padding.l,
    },
    productContent: {
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
    },
    productInfo: {
        flex: 1,
    },
    name: {},
    price: {},
    productFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: BaseStyles.margin.m,
    },
    quantity: {
        width: 50,
        padding: BaseStyles.padding.s,
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightBlue,
    },
    priceDetails: {
        borderWidth: 1,
        borderColor: BaseStyles.colors.lightGrey,
        borderRadius: 5,
        marginTop: BaseStyles.margin.xs,
        padding: BaseStyles.padding.s,
        paddingLeft: BaseStyles.padding.l,
        paddingRight: BaseStyles.padding.l,
    },
    priceDetailsTitle: {
        marginTop: BaseStyles.margin.s,
        marginBottom: BaseStyles.margin.s,
        fontWeight: 'bold',
        fontSize: BaseStyles.fontSize.m,
        textTransform: 'uppercase',
        color: BaseStyles.colors.grey,
    },
    totalCosts: {
        paddingTop: BaseStyles.padding.m,
        paddingBottom: BaseStyles.padding.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: BaseStyles.colors.lightGrey,
    },
    priceDetailsTotal: {
        paddingTop: BaseStyles.padding.m,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderColor: BaseStyles.colors.lightGrey,
    },
    notesContainer: {
        marginTop: BaseStyles.margin.m,
        flexDirection: 'row',
        padding: BaseStyles.padding.xl,
        paddingRight: BaseStyles.padding.xxxl,
        paddingLeft: BaseStyles.padding.xxxl,
        backgroundColor: BaseStyles.colors.lightGrey,
    },
    notes: {
        marginLeft: BaseStyles.margin.m,
        color: BaseStyles.colors.grey,
        textTransform: 'capitalize',
    },
});

export default styles;

import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../app.styles';

const styles = StyleSheet.create({
    wrapper: {},
    header: {
        padding: BaseStyles.margin.l,
        borderBottomWidth: 2,
        borderBottomColor: BaseStyles.colors.blue,
    },
    headerTitle: { fontSize: BaseStyles.fontSize.xl, color: BaseStyles.colors.blue },
    group: {
        paddingLeft: BaseStyles.margin.m,
        paddingRight: BaseStyles.margin.m,
        paddingTop: BaseStyles.margin.m,
        paddingBottom: BaseStyles.margin.m,
        borderColor: BaseStyles.colors.lightGrey,
        borderBottomWidth: 1,
    },
    groupHeader: {},
    groupHeaderTitle: {
        color: BaseStyles.colors.grey,
        fontSize: BaseStyles.fontSize.s,
    },
    item: {
        paddingLeft: 0,
        marginLeft: -5,
    },
    itemIcon: {
        marginRight: -15,
        flexBasis: 30,
        textAlign: 'center',
    },
    itemLabel: {
        paddingLeft: 0,
        marginLeft: 0,
        color: BaseStyles.colors.black,
    },
});

export default styles;

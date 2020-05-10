import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const GroupHeaderStyles = StyleSheet.create({
    itemsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    itemsHeaderTitle: {
        color: BaseStyles.colors.lightBlue,
        fontSize: BaseStyles.fontSize.m,
    },
    viewAllButton: {
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.s,
        borderRadius: 2,
    },
    viewAllText: {
        textAlign: 'center',
        color: BaseStyles.colors.white,
        fontSize: BaseStyles.fontSize.xs,
    },
    wrapper: {
        alignItems: 'stretch',
    },
    productsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    column: {
        justifyContent: 'space-between',
    },
});

export default GroupHeaderStyles;

import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
    selectColorHeaderWrapper: {
        margin: BaseStyles.margin.s,
        alignSelf: 'stretch',
    },
    selectColorHeader: {
        color: BaseStyles.colors.lightBlue,
        fontSize: BaseStyles.fontSize.m,
    },
    selectColorsWrapper: {
        marginLeft: BaseStyles.margin.s,
        marginRight: BaseStyles.margin.s,
        marginBottom: BaseStyles.margin.m,
    },
    selectColorItem: {
        backgroundColor: BaseStyles.colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        padding: BaseStyles.padding.m,
        marginRight: BaseStyles.margin.xs,
    },
    selectColorItemText: {
        color: BaseStyles.colors.black,
        textTransform: 'uppercase',
    },
});

export default styles;

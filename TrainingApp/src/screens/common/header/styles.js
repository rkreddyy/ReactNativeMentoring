import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
    header: {
        minHeight: 30,
        padding: BaseStyles.padding.l,
        backgroundColor: BaseStyles.colors.lightBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: BaseStyles.fontSize.m,
        color: BaseStyles.colors.white,
    },
});

export default styles;

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
    menuButton: {
        display: 'flex',
        width: BaseStyles.fontSize.l,
        height: BaseStyles.fontSize.l,
    },
    rightIconGroup: {
        flexBasis: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});

export default styles;

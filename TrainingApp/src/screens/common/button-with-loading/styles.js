import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
    signInButton: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInButtonCollapsed: {
        width: 100,
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    signInText: {
        color: BaseStyles.colors.white,
        textTransform: 'uppercase',
        fontSize: BaseStyles.fontSize.m,
    },
});

export default styles;

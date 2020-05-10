import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../app.styles';

const styles = StyleSheet.create({
    transparentWrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: BaseStyles.padding.xl,
        backgroundColor: BaseStyles.colors.white,
        width: 250,
        borderRadius: 10,
    },
    icon: {
        margin: BaseStyles.margin.m,
    },
    message: {
        fontSize: BaseStyles.fontSize.m,
        color: BaseStyles.colors.warning,
        textAlign: 'center',
    },
    buttonsWrapper: {
        marginTop: BaseStyles.margin.m,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        paddingLeft: BaseStyles.padding.l,
        paddingRight: BaseStyles.padding.l,
    },
    buttonText: {
        color: BaseStyles.colors.white,
    },
});

export default styles;

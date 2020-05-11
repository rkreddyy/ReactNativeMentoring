import { StyleSheet } from 'react-native';

import { BaseStyles, BaseStylesSets } from '../../../app.styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: BaseStyles.fontSize.xl,
        textAlign: 'center',
        margin: BaseStyles.margin.l,
        color: BaseStyles.colors.lightBlue,
        marginTop: 220,
    },
    inputGroup: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        ...BaseStylesSets.containerRightLeftMargins,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        color: BaseStyles.colors.black,
        fontSize: BaseStyles.fontSize.m,
        marginTop: 20,
    },
    restorePassword: {
        ...BaseStylesSets.containerRightLeftMargins,
        alignSelf: 'flex-end',
        marginTop: 0,
    },
    link: {
        ...BaseStylesSets.baseLink,
    },
    signUp: {
        ...BaseStylesSets.containerRightLeftMargins,
        alignSelf: 'center',
        marginBottom: BaseStyles.margin.l,
    },
    signInButton: {
        width: 350,
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
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

export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];

export default styles;

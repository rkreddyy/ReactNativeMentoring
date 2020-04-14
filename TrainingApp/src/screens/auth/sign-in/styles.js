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
        marginTop: 260,
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
        marginTop: 20,
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
        alignSelf: 'stretch',
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
    },
    signInText: {
        textAlign: 'center',
        color: BaseStyles.colors.white,
        textTransform: 'uppercase',
        fontSize: BaseStyles.fontSize.m,
    },
});

export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];

export default styles;

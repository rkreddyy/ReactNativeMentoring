import { StyleSheet } from 'react-native';
import { BaseStyles, BaseStylesSets } from '../../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: BaseStyles.fontSize.big,
        textAlign: 'center',
        margin: BaseStyles.margin,
        color: BaseStyles.colors.lightBlue,
        marginTop: 120,
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
        fontSize: BaseStyles.fontSize.regular,
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
    signIn: {
        ...BaseStylesSets.containerRightLeftMargins,
        alignSelf: 'center',
    },
    signInButton: {
        alignSelf: 'stretch',
        backgroundColor: BaseStyles.colors.Button,
        padding: BaseStyles.padding,
        margin: BaseStyles.margin,
    },
    signInText: {
        textAlign: 'center',
        color: BaseStyles.colors.white,
        textTransform: 'uppercase',
        fontSize: BaseStyles.fontSize.regular,
    },
    backIcon: {
        width: 30,
        height: 30,
        marginLeft: BaseStyles.margin,
        marginTop: BaseStyles.margin,
    },
});

export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];

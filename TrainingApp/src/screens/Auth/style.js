import { StyleSheet } from 'react-native';
import { BaseStylesSets, BaseStyles } from '../../theme';

export const warningStyles = StyleSheet.create({
    errorContainer: {
        ...BaseStylesSets.containerRightLeftMargins,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'transparent',
    },
    error: {
        color: BaseStyles.colors.red,
        fontSize: BaseStyles.fontSize.small,
    }
});

export const signInStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: BaseStyles.fontSize.big,
        textAlign: 'center',
        margin: BaseStyles.margin,
        color: BaseStyles.colors.lightBlue,
        marginTop: 200,
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
    signUp: {
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
    }
});

export const signUpStyles = StyleSheet.create({
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
    }
});


export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];
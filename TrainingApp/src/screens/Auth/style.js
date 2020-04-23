import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    buttonContainer: {
        marginTop: 10
    }
});

export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];

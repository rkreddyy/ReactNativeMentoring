import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../../app.styles';

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
});

export default styles;

export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];

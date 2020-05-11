import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../app.styles';

const MainStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: BaseStyles.colors.white,
    },
    groups: {
        flexDirection: 'row',
    },
    items: {
        padding: BaseStyles.padding.l,
    },
    spinner: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});

export default MainStyles;

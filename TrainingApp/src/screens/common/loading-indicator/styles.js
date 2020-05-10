import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        minHeight: 40,
    },
    point: {
        width: 7,
        height: 7,
        borderRadius: 7,
        backgroundColor: BaseStyles.colors.white,
        marginLeft: 2,
        marginRight: 2,
    },
});

export default styles;

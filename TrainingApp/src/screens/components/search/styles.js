import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../../app.styles';

export const SearchStyles = StyleSheet.create({
    wrapper: {
        padding: BaseStyles.padding.l,
        backgroundColor: BaseStyles.colors.lightBlue,
    },
    inputWrapper: {
        backgroundColor: BaseStyles.colors.white,
        borderRadius: 10,
        borderColor: 'white',
        flexDirection: 'row',
    },
    input: {
        height: 40,
    },
});

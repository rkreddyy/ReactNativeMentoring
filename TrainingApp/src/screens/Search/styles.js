import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../app.styles';

export const SearchStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: BaseStyles.colors.white,
        borderRadius: 10,
        borderColor: 'white',
        flexDirection: 'row',
    },
    input: {
        height: 40,
    },
    searchIcon: {
        marginLeft: BaseStyles.margin.l,
        marginRight: BaseStyles.margin.s,
        alignSelf: 'center',
    },
});

import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../app.styles';

const MainStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    groups: {
        flexDirection: 'row',
    },
    groupsScrollable: {
        height: 110,
    },
    items: {
        padding: BaseStyles.padding.l,
    },
});

export default MainStyles;

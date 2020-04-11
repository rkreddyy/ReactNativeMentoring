import { StyleSheet } from 'react-native';
import { BaseStylesSets, BaseStyles } from '../../app.styles';

const MainStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        ...BaseStylesSets.header,
    },
    title: {
        fontSize: BaseStyles.fontSize.m,
        color: BaseStyles.colors.white,
    },
    menuButton: {
        width: BaseStyles.fontSize.l,
        height: BaseStyles.fontSize.l,
    },
    search: {
        padding: BaseStyles.padding.l,
        backgroundColor: BaseStyles.colors.lightBlue,
    },
    groups: {
        flexDirection: 'row',
    },
    groupsScrollable: {
        height: 110,
    },
    divider: {
        backgroundColor: BaseStyles.colors.lightGrey,
        height: 10,
    },
    items: {
        padding: BaseStyles.padding.l,
    },
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 16,
        overflow: "visible"
    },

    list: {
        overflow: "visible"
    },

    separator: {
        height: 8
    },
});

export default {
    main: MainStyles,
};

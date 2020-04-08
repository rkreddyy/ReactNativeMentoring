import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../app.styles';

export const GroupStyles = StyleSheet.create({
    groupImage: {
        width: 45,
        height: 45,
    },
    groupImageWrapper: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: BaseStyles.colors.black,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    group: {
        width: 80,
        alignItems: 'center',
        marginRight: BaseStyles.margin.s,
        marginLeft: BaseStyles.margin.s,
        marginTop: BaseStyles.margin.m,
        marginBottom: BaseStyles.margin.m,
    },
    groupName: {
        textAlign: 'center',
    },
});

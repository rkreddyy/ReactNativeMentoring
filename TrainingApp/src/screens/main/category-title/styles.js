import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
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
        backgroundColor: BaseStyles.colors.white,
    },
    group: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: BaseStyles.margin.s,
        marginLeft: BaseStyles.margin.s,
        marginTop: BaseStyles.margin.m,
        marginBottom: BaseStyles.margin.m,
    },
    groupName: {
        textAlign: 'center',
    },
});

export default styles;

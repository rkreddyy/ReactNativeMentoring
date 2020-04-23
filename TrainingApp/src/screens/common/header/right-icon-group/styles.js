import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../../app.styles';

const styles = StyleSheet.create({
    wrapper: {
        flexBasis: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    menuButton: {
        display: 'flex',
        width: BaseStyles.fontSize.l,
        height: BaseStyles.fontSize.l,
    },
});

export default styles;

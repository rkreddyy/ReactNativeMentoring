import { StyleSheet } from 'react-native';

import { BaseStyles, BaseStylesSets } from '../../../app.styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        width: BaseStyles.fontSize.xl,
        height: BaseStyles.fontSize.xl,
        marginLeft: BaseStyles.margin.l,
        marginTop: BaseStyles.margin.l,
    },
    title: {
        backgroundColor: 'transparent',
        fontSize: BaseStyles.fontSize.xl,
        textAlign: 'center',
        margin: BaseStyles.margin.l,
        color: BaseStyles.colors.lightBlue,
        marginTop: 200,
    },
    description: {
        ...BaseStylesSets.containerRightLeftMargins,
        color: BaseStyles.colors.black,
        textAlign: 'center',
        fontSize: BaseStyles.fontSize.s,
    },
    input: {
        ...BaseStylesSets.containerRightLeftMargins,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        color: BaseStyles.colors.black,
        fontSize: BaseStyles.fontSize.m,
        marginTop: 100,
    },
    restoreText: {
        textAlign: 'center',
        color: BaseStyles.colors.white,
        textTransform: 'uppercase',
        fontSize: BaseStyles.fontSize.m,
    },
    restoreButton: {
        alignSelf: 'stretch',
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
    },
});

export const BackgroundGradientColors = ['#c4ddea', '#bdbad5', '#ebcdd6', '#f1dabe'];

export default styles;

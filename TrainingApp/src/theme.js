export const BaseStyles = {
    margin: 30,
    padding: 8,
    fontSize: {big: 32, regular: 18, small: 16},
    colors: {
        white: '#ffffff',
        black: '#000000',
        red: 'red',
        lightBlue: '#00a8f3',
        Link: '#436bff',
        LinkHighlighUnderlay: '#d3d3d3',
        Button: '#148cbf',
    },
    buttonHitSlop: {
        top: 30,
        left: 30,
        bottom: 30,
        right: 30,
    },
};

export const BaseStylesSets = {
    containerRightLeftMargins: {
        marginRight: BaseStyles.margin,
        marginLeft: BaseStyles.margin,
    },
    containerMargins: {
        margin: BaseStyles.margin,
    },
    baseLink: {
        color: BaseStyles.colors.Link,
        fontSize: BaseStyles.fontSize.small,
    },
};

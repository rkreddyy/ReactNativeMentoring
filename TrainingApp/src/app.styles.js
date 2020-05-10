export const BaseStyles = {
    margin: {
        xs: 5,
        s: 10,
        m: 20,
        l: 30,
    },
    padding: { m: 8, s: 4, l: 12, xs: 2, xl: 18, xxxl: 36 },
    fontSize: { xxl: 45, xl: 32, l: 24, m: 18, s: 16, xs: 12 },
    colors: {
        white: '#ffffff',
        black: '#000000',
        red: 'red',
        lightBlue: '#00a8f3',
        lightGrey: '#ebebeb',
        grey: 'grey',
        blue: '#148cbf',
        transparent: 'transparent',
        Link: '#436bff',
        LinkHighlighUnderlay: '#d3d3d3',
        Button: '#148cbf',
        warning: '#fd7e14',
    },
    buttonHitSlop: {
        top: 30,
        left: 20,
        bottom: 30,
        right: 50,
    },
};

export const BaseStylesSets = {
    containerRightLeftMargins: {
        marginRight: BaseStyles.margin.l,
        marginLeft: BaseStyles.margin.l,
    },
    containerMargins: {
        margin: BaseStyles.margin.l,
    },
    baseLink: {
        color: BaseStyles.colors.Link,
        fontSize: BaseStyles.fontSize.s,
    },
};

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#37A372",     // Green
    secondary: "#2C2C2C",    // Gray
    backColar: "#Ffeed2",
    lightPurple: '#7B789F',
    purple: "#595683",
    yellow: '#F1CD7C',
    lightYellow: '#FFD88A',
    white: "#fff",
    white1: "#F1E6D8",
    lightGreen: "#7EBDA2",
    lightGreen2: '#BED2BB',
    red: "#D84035",
    red2: "#FF7363",
    black: "#000000",
    gray: "#6E6E6E",
    gray1: "#363636",
    gray2: "#4B4B4B",
    gray3: "#4D4D4D",
    lightGray: "#3B3B3B",
    lightGray2: '#707070',
    lightGray3: '#f0f0f0',

    pink: '#D993B4',
    lightPink: '#F3DEE8',

    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const darkTheme = {
    name: "dark",
    backgroundColor: COLORS.secondary,
    textColor: COLORS.white,
    tabBackgroundColor: COLORS.lightGray,
    cardBackgroundColor: COLORS.gray3,
    bottomTabBarBackgroundColor: COLORS.gray3,
    headerColor: COLORS.yellow,
}

export const lightTheme = {
    name: "light",
    backgroundColor: COLORS.lightGray3,
    textColor: COLORS.black,
    tabBackgroundColor: COLORS.yellow,
    cardBackgroundColor: COLORS.lightYellow,
    bottomTabBarBackgroundColor: COLORS.lightYellow,
    headerColor: COLORS.red,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;

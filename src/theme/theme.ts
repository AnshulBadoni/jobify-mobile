import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export const PALETTE = {
  black: '#000000',
  white: '#FFFFFF',

  // Grays / Surfaces
  gray900: '#121212', // card-surface
  gray850: '#1c1c1c', // card-charcoal
  gray800: '#1f1f1f', // card-dark-grey
  gray700: '#2d2f31', // tonal-surface
  gray600: '#333333', // divider
  gray500: '#444746', // divider-variant

  // Text
  textPrimary: '#e3e3e3',
  textSecondary: '#c4c7c5',

  // Accents - Green
  greenLight: '#b7eab9', // material-green
  greenPrimary: '#34A853',
  greenDark: '#2e7d32', // material-green-button
  greenTimeline: '#388e3c',
  greenTonal: 'rgba(183, 234, 185, 0.12)',
  greenTonalText: '#b7eab9',

  // Accents - Blue
  bluePrimary: '#1a73e8', // material-blue
  blueLight: '#4285F4',
  blueTonal: 'rgba(168, 200, 255, 0.12)',
  blueTonalText: '#a8c8ff',

  // Accents - Yellow/Gold
  yellowPrimary: '#FFD700', // electric-gold
  yellowDark: '#FBBC05',
  yellowTonal: 'rgba(255, 233, 168, 0.12)',
  yellowTonalText: '#ffe9a8',

  // Accents - Pink/Purple
  pinkLight: '#f8bbd0',
  purpleTonal: 'rgba(235, 202, 255, 0.12)',
  purpleTonalText: '#ebcaff',

  // Accents - Cyan
  cyanTonal: 'rgba(161, 239, 233, 0.12)',
  cyanTonalText: '#a1efe9',

  // Misc
  red: '#EA4335',
  redDark: '#d93025',
};

export const SPACING = {
  s2: 2,
  s4: 4,
  s6: 6,
  s8: 8,
  s10: 10,
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s32: 32,
  s40: 40,
  s48: 48,
  s56: 56,
  s64: 64,
};

export const RADIUS = {
  r4: 4,
  r8: 8,
  r12: 12,
  r16: 16,
  r24: 24,
  full: 9999,
};

export const TYPOGRAPHY = {
  fontFamily: 'GoogleSans-Regular',
  fontFamilyMedium: 'GoogleSans-Medium',
  fontFamilyBold: 'GoogleSans-Bold',

  displayLarge: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: 'GoogleSans-Bold',
    color: PALETTE.textPrimary,
  } as TextStyle,

  displayMedium: {
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'GoogleSans-Bold',
    color: PALETTE.textPrimary,
  } as TextStyle,

  titleLarge: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'GoogleSans-Bold',
    color: PALETTE.textPrimary,
  } as TextStyle,

  titleMedium: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'GoogleSans-Medium',
    color: PALETTE.textPrimary,
  } as TextStyle,

  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'GoogleSans-Regular',
    color: PALETTE.textPrimary,
  } as TextStyle,

  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'GoogleSans-Regular',
    color: PALETTE.textSecondary,
  } as TextStyle,

  labelLarge: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'GoogleSans-Medium',
    color: PALETTE.textPrimary,
  } as TextStyle,

  labelSmall: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'GoogleSans-Medium',
    color: PALETTE.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  } as TextStyle,
};

export const THEME = {
  colors: {
    background: PALETTE.black,
    card: PALETTE.gray850,
    cardVariant: PALETTE.gray800,
    surface: PALETTE.gray700,

    primary: PALETTE.greenLight,
    onPrimary: '#00390a', // Dark green text on light green button

    secondary: PALETTE.bluePrimary,
    onSecondary: PALETTE.white,

    text: PALETTE.textPrimary,
    textSecondary: PALETTE.textSecondary,

    divider: PALETTE.gray600,

    ...PALETTE,
  },
  spacing: SPACING,
  radius: RADIUS,
  typography: TYPOGRAPHY,
};

export type ThemeType = typeof THEME;

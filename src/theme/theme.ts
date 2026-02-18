import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export const PALETTE = {
  // Backgrounds
  deepBlack: '#000000',
  cardCharcoal: '#1c1c1c',
  cardSurface: '#121212',
  surfaceContainer: '#1D1B20',
  surfaceContainerHigh: '#2B2930',
  surfaceContainerLow: '#1A1C1A',
  tonalSurface: '#2d2f31',
  tonalGreyBlue: '#232a31',

  // Text
  textPrimary: '#e3e3e3',
  textSecondary: '#c4c7c5',
  textOnGreen: '#00390a',
  textOnYellow: '#000000',
  textOnBlue: '#FFFFFF',
  textOnPink: '#2D0014',

  // Accents - Green
  greenMaterial: '#b7eab9', // --material-green
  greenButton: '#2e7d32',   // --material-green-button
  greenVibrant: '#B6EEBD',
  greenRefined: '#81C784',
  greenTimeline: '#388e3c',
  greenTonal: 'rgba(183, 234, 185, 0.12)',

  // Accents - Blue
  blueMaterial: '#a8c7fa',  // --material-blue (light)
  bluePrimary: '#4285F4',   // --material-blue (primary)
  blueTonal: 'rgba(168, 200, 255, 0.12)',
  blueTonalText: '#a8c8ff',
  chipText: '#c2e7ff',

  // Accents - Yellow
  yellowSunflower: '#FBC02D', // --sunflower-yellow
  yellowMaterial: '#FFD700',
  yellowLight: '#fde293',
  yellowTonal: 'rgba(255, 233, 168, 0.12)',
  yellowTonalText: '#ffe9a8',

  // Accents - Pink/Other
  pinkLight: '#F48FB1',
  pinkTonal: 'rgba(255, 216, 228, 0.12)', // inferred
  purpleTonal: 'rgba(235, 202, 255, 0.12)',
  purpleTonalText: '#ebcaff',
  cyanTonal: 'rgba(161, 239, 233, 0.12)',
  cyanTonalText: '#a1efe9',

  // UI Elements
  divider: '#333333',
  dragHandle: '#444746',
  outlineVariant: '#49454F',
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
  r28: 28, // Bottom sheet
  full: 9999,
};

// System font fallback since custom fonts are not provided
const SYSTEM_FONT = 'System';

export const TYPOGRAPHY = {
  fontFamily: SYSTEM_FONT,
  fontFamilyMedium: SYSTEM_FONT, // System font usually handles weights automatically via fontWeight style
  fontFamilyBold: SYSTEM_FONT,

  displayLarge: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700', // bold
    color: PALETTE.textPrimary,
  } as TextStyle,

  displayMedium: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    color: PALETTE.textPrimary,
  } as TextStyle,

  headlineLarge: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: PALETTE.textPrimary,
  } as TextStyle,

  headlineMedium: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: PALETTE.textPrimary,
  } as TextStyle,

  titleLarge: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700', // Google Sans Display Bold often maps to 700 or 800
    color: PALETTE.textPrimary,
  } as TextStyle,

  titleMedium: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500', // Medium
    color: PALETTE.textPrimary,
  } as TextStyle,

  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400', // Regular
    color: PALETTE.textPrimary,
  } as TextStyle,

  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: PALETTE.textSecondary,
  } as TextStyle,

  labelLarge: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500', // Medium
    color: PALETTE.textPrimary,
  } as TextStyle,

  labelSmall: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: PALETTE.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  } as TextStyle,
};

export const THEME = {
  colors: {
    background: PALETTE.deepBlack,
    card: PALETTE.cardCharcoal,
    cardVariant: PALETTE.cardSurface,
    surface: PALETTE.tonalSurface,

    primary: PALETTE.greenMaterial,
    onPrimary: PALETTE.textOnGreen,

    secondary: PALETTE.bluePrimary,
    onSecondary: PALETTE.textOnBlue,

    tertiary: PALETTE.yellowSunflower,
    onTertiary: PALETTE.textOnYellow,

    text: PALETTE.textPrimary,
    textSecondary: PALETTE.textSecondary,

    divider: PALETTE.divider,
    outline: PALETTE.outlineVariant,

    ...PALETTE,
  },
  spacing: SPACING,
  radius: RADIUS,
  typography: TYPOGRAPHY,
};

export type ThemeType = typeof THEME;

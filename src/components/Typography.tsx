import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { THEME } from '../theme/theme';

type Variant =
  | 'displayLarge'
  | 'displayMedium'
  | 'titleLarge'
  | 'titleMedium'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'labelLarge'
  | 'labelSmall';

export interface TypographyProps extends RNTextProps {
  variant?: Variant;
  color?: string;
  weight?: 'regular' | 'medium' | 'bold';
  align?: TextStyle['textAlign'];
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  variant = 'bodyLarge',
  color,
  weight,
  align,
  ...props
}) => {
  const variantStyle = THEME.typography[variant];

  const customStyle: TextStyle = {};
  if (color) customStyle.color = color;
  if (align) customStyle.textAlign = align;
  if (weight) {
    if (weight === 'bold') customStyle.fontFamily = THEME.typography.fontFamilyBold;
    if (weight === 'medium') customStyle.fontFamily = THEME.typography.fontFamilyMedium;
    if (weight === 'regular') customStyle.fontFamily = THEME.typography.fontFamily;
  }

  return (
    <RNText style={[variantStyle, customStyle, style]} {...props}>
      {children}
    </RNText>
  );
};

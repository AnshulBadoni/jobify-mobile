import React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';
import { THEME } from '../theme/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'surface' | 'outlined' | 'flat';
  onPress?: () => void;
  padding?: keyof typeof THEME.spacing;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default',
  onPress,
  padding = 's16',
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'default': return THEME.colors.cardCharcoal;
      case 'surface': return THEME.colors.cardSurface;
      case 'flat': return 'transparent';
      case 'outlined': return 'transparent';
      default: return THEME.colors.cardCharcoal;
    }
  };

  const containerStyle: ViewStyle = {
    backgroundColor: getBackgroundColor(),
    borderRadius: THEME.radius.r16,
    padding: THEME.spacing[padding],
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: variant === 'outlined' ? THEME.colors.divider : 'transparent',
    overflow: 'hidden',
  };

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[containerStyle, style]}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={[containerStyle, style]}>{children}</View>;
};

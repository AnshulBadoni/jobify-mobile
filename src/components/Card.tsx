import React from 'react';
import { View, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../theme/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'charcoal' | 'dark' | 'glass';
  onPress?: () => void;
  padding?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default',
  onPress,
  padding = THEME.spacing.s16
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'default': return THEME.colors.card;
      case 'charcoal': return THEME.colors.cardVariant; // 1c1c1c
      case 'dark': return THEME.colors.gray800;
      case 'glass': return 'rgba(255, 255, 255, 0.1)'; // Simple fallback, use BlurView ideally
      default: return THEME.colors.card;
    }
  };

  const containerStyle = {
    backgroundColor: getBackgroundColor(),
    borderRadius: THEME.radius.r16,
    padding: padding,
    // Add border for glass look or definition if needed
    borderWidth: variant === 'glass' ? 1 : 0,
    borderColor: variant === 'glass' ? 'rgba(255,255,255,0.1)' : 'transparent',
  };

  if (onPress) {
    return (
      <TouchableOpacity
        style={[containerStyle, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[containerStyle, style]}>
      {children}
    </View>
  );
};

import React from 'react';
import { Pressable, ViewStyle, TextStyle, ActivityIndicator, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { THEME } from '../theme/theme';
import { Typography } from './Typography';
import { Icon } from './Icon';
import { MaterialIcons } from '@expo/vector-icons';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tonal' | 'outline' | 'tonalGreen' | 'tonalBlue';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  variant?: ButtonVariant;
  icon?: keyof typeof MaterialIcons.glyphMap;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  icon,
  loading = false,
  disabled = false,
  style,
  textStyle,
  fullWidth = false,
  children,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const getBackgroundColor = () => {
    if (disabled) return THEME.colors.divider;
    switch (variant) {
      case 'primary': return THEME.colors.primary; // Green
      case 'secondary': return THEME.colors.secondary; // Blue
      case 'tonal': return THEME.colors.tonalSurface;
      case 'tonalGreen': return THEME.colors.greenTonal;
      case 'tonalBlue': return THEME.colors.blueTonal;
      case 'outline': return 'transparent';
      case 'ghost': return 'transparent';
      default: return THEME.colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return THEME.colors.textSecondary;
    switch (variant) {
      case 'primary': return THEME.colors.textOnGreen;
      case 'secondary': return THEME.colors.textOnBlue;
      case 'tonal': return THEME.colors.textPrimary;
      case 'tonalGreen': return THEME.colors.greenMaterial;
      case 'tonalBlue': return THEME.colors.blueTonalText;
      case 'outline': return THEME.colors.textPrimary;
      case 'ghost': return THEME.colors.textPrimary;
      default: return THEME.colors.deepBlack;
    }
  };

  const containerStyle: ViewStyle = {
    backgroundColor: getBackgroundColor(),
    paddingVertical: THEME.spacing.s16,
    paddingHorizontal: THEME.spacing.s24,
    borderRadius: THEME.radius.full,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.6 : 1,
    borderWidth: variant === 'outline' ? 1 : 0,
    borderColor: variant === 'outline' ? THEME.colors.divider : 'transparent',
    width: fullWidth ? '100%' : undefined,
  };

  return (
    <AnimatedPressable
      onPress={disabled || loading ? undefined : onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[containerStyle, animatedStyle, style]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={getTextColor()}
              style={{ marginRight: title ? 8 : 0 }}
            />
          )}
          {title && (
            <Typography
              variant="labelLarge"
              style={[{ color: getTextColor(), fontWeight: '700' }, textStyle]}
            >
              {title}
            </Typography>
          )}
          {children}
        </>
      )}
    </AnimatedPressable>
  );
};

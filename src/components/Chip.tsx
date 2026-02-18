import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Typography } from './Typography';
import { Icon } from './Icon';
import { THEME } from '../theme/theme';
import { MaterialIcons } from '@expo/vector-icons';

interface ChipProps {
  label: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  selected?: boolean;
  onPress?: () => void;
  variant?: 'filled' | 'outlined' | 'tonal';
  color?: string; // override color
  textColor?: string; // override text color
  style?: ViewStyle;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  icon,
  selected = false,
  onPress,
  variant = 'tonal',
  color,
  textColor,
  style
}) => {
  // Determine background color
  let backgroundColor = THEME.colors.gray700; // default tonal
  let finalTextColor = THEME.colors.textPrimary;
  let borderColor = 'transparent';

  if (variant === 'filled') {
    backgroundColor = selected ? THEME.colors.primary : THEME.colors.gray700;
    finalTextColor = selected ? THEME.colors.onPrimary : THEME.colors.textPrimary;
  } else if (variant === 'outlined') {
    backgroundColor = 'transparent';
    borderColor = THEME.colors.divider;
    finalTextColor = THEME.colors.textSecondary;
  } else if (variant === 'tonal') {
      // Use color prop if provided (e.g. for specific skill chips like "blueTonal")
      backgroundColor = color || THEME.colors.gray700;
      finalTextColor = textColor || THEME.colors.textPrimary;
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor, borderColor, borderWidth: variant === 'outlined' ? 1 : 0 },
        style
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      {icon && (
        <Icon
          name={icon}
          size={18}
          color={finalTextColor}
          style={styles.icon}
        />
      )}
      <Typography
        variant="labelSmall"
        style={{ color: finalTextColor, fontSize: 13, textTransform: 'none', fontWeight: '500' }}
      >
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: THEME.radius.full,
    alignSelf: 'flex-start',
    marginRight: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 6,
  },
});

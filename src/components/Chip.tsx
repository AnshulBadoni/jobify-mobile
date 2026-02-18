import React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native';
import { THEME } from '../theme/theme';
import { Typography } from './Typography';
import { Icon } from './Icon';
import { MaterialIcons } from '@expo/vector-icons';

interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: 'filled' | 'outlined' | 'tonal' | 'filter';
  color?: string; // override color
  textColor?: string; // override text color
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onPress,
  icon,
  variant = 'filled',
  color,
  textColor,
}) => {
  const getBackgroundColor = () => {
    if (selected) return THEME.colors.greenMaterial;
    if (color) return color;
    switch (variant) {
      case 'filled': return THEME.colors.tonalGreyBlue;
      case 'tonal': return THEME.colors.tonalSurface;
      case 'filter': return selected ? THEME.colors.greenMaterial : THEME.colors.tonalGreyBlue;
      case 'outlined': return 'transparent';
      default: return THEME.colors.tonalGreyBlue;
    }
  };

  const getTextColor = () => {
    if (selected) return THEME.colors.textOnGreen;
    if (textColor) return textColor;
    switch (variant) {
      case 'filled': return THEME.colors.textPrimary; // or chipText
      case 'tonal': return THEME.colors.textSecondary;
      case 'filter': return selected ? THEME.colors.textOnGreen : THEME.colors.textPrimary;
      case 'outlined': return THEME.colors.textPrimary;
      default: return THEME.colors.chipText;
    }
  };

  const containerStyle: ViewStyle = {
    backgroundColor: getBackgroundColor(),
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: THEME.radius.full,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: variant === 'outlined' ? THEME.colors.divider : 'transparent',
    alignSelf: 'flex-start',
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={containerStyle}>
      {icon && (
        <Icon
          name={icon}
          size={16}
          color={getTextColor()}
          style={{ marginRight: 6 }}
        />
      )}
      <Typography
        variant="labelMedium"
        style={{ color: getTextColor(), fontWeight: '500', fontSize: 13 }}
      >
        {label}
      </Typography>
    </TouchableOpacity>
  );
};

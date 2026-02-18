import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ViewStyle, StyleProp } from 'react-native';
import { THEME } from '../theme/theme';

interface IconProps {
  name: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = THEME.colors.textPrimary,
  style
}) => {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};

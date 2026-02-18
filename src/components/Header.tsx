import React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { THEME } from '../theme/theme';
import { Typography } from './Typography';
import { Icon } from './Icon';
import { MaterialIcons } from '@expo/vector-icons';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  transparent?: boolean;
  iconColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  rightAction,
  transparent = false,
  iconColor = THEME.colors.textPrimary,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.spacing.s16,
    paddingVertical: THEME.spacing.s12,
    backgroundColor: transparent ? 'transparent' : THEME.colors.deepBlack,
    height: 56, // Standard app bar height
    width: '100%',
  };

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        {showBack && (
          <TouchableOpacity onPress={handleBack} style={{ marginRight: 16, padding: 4 }}>
            <Icon name="arrow-back" size={24} color={iconColor} />
          </TouchableOpacity>
        )}
        {title && (
          <Typography variant="titleLarge" style={{ color: iconColor }}>
            {title}
          </Typography>
        )}
      </View>
      <View>{rightAction}</View>
    </View>
  );
};

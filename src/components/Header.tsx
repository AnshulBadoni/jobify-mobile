import React from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { Typography } from './Typography';
import { Icon } from './Icon';
import { THEME } from '../theme/theme';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  transparent?: boolean;
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  rightAction,
  transparent = false,
  style
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={[
      styles.container,
      transparent ? styles.transparent : styles.default,
      style
    ]}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color={THEME.colors.white} />
          </TouchableOpacity>
        )}
        {title && (
          <Typography variant="titleMedium" style={styles.title}>
            {title}
          </Typography>
        )}
      </View>
      <View style={styles.rightContainer}>
        {rightAction}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.spacing.s16,
    paddingVertical: THEME.spacing.s12, // Reduced height
    height: 56,
  },
  default: {
    backgroundColor: THEME.colors.background,
  },
  transparent: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: THEME.spacing.s16,
    padding: 4,
  },
  title: {
    color: THEME.colors.white,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

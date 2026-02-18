import React from 'react';
import { View, ViewStyle, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../theme/theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean; // Default true
  edges?: ('top' | 'right' | 'bottom' | 'left')[];
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  safeArea = true,
  edges = ['top', 'left', 'right']
}) => {
  const Container = safeArea ? SafeAreaView : View;

  return (
    <Container
      style={[styles.container, style]}
      edges={safeArea ? edges : undefined}
    >
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.background} />
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
});

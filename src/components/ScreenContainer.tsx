import React from 'react';
import { View, ViewStyle, StatusBar as RNStatusBar } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { THEME } from '../theme/theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  safeArea?: boolean;
  backgroundColor?: string;
  edges?: ['top' | 'right' | 'bottom' | 'left'];
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  safeArea = true,
  backgroundColor = THEME.colors.deepBlack,
  edges,
}) => {
  const insets = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: safeArea ? insets.top : 0,
    paddingBottom: safeArea ? insets.bottom : 0,
    paddingLeft: safeArea ? insets.left : 0,
    paddingRight: safeArea ? insets.right : 0,
  };

  return (
    <View style={[containerStyle, style]}>
      <RNStatusBar barStyle="light-content" backgroundColor={backgroundColor} />
      {children}
    </View>
  );
};

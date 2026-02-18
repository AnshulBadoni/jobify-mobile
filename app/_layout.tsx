import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // In a real project, we would load the custom fonts here.
  // Since we don't have the font files, we rely on the system font fallback
  // defined in our theme (or the OS default).
  const loaded = true;

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="review/index" options={{ presentation: 'card' }} />
        <Stack.Screen name="professional-profile/index" options={{ presentation: 'card' }} />
        <Stack.Screen name="job/[id]" options={{ presentation: 'card' }} />
        <Stack.Screen name="discovery/index" options={{ presentation: 'card' }} />
      </Stack>
    </>
  );
}

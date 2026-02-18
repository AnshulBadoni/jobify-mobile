import React from 'react';
import { Tabs } from 'expo-router';
import { Platform, View, StyleSheet } from 'react-native';
import { THEME } from '../../src/theme/theme';
import { Icon } from '../../src/components/Icon';
import { BlurView } from 'expo-blur';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarActiveTintColor: THEME.colors.text,
        tabBarInactiveTintColor: THEME.colors.textSecondary,
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Icon name="explore" size={24} color={focused ? THEME.colors.background : color} />
            </View>
          ),
          tabBarLabelStyle: styles.label,
        }}
      />
      <Tabs.Screen
        name="saved" // Placeholder for now
        options={{
          title: 'Saved',
          href: null, // Disable for now as not in specs
          tabBarIcon: ({ color }) => <Icon name="bookmark-border" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="applied" // Placeholder
        options={{
          title: 'Applied',
          href: null, // Disable
          tabBarIcon: ({ color }) => <Icon name="work-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon name="person-outline" size={24} color={color} />,
          tabBarLabelStyle: styles.label,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(18, 18, 18, 0.94)',
    borderTopWidth: 0,
    height: 80, // Taller tab bar
    paddingBottom: 20,
    paddingTop: 10,
  },
  iconContainer: {
    padding: 4,
    borderRadius: 16,
  },
  activeIconContainer: {
    backgroundColor: '#c2e7ff', // From design syntax
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});

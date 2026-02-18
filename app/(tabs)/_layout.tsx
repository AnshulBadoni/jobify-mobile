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
          Platform.OS === 'ios' ?
            <BlurView tint="dark" intensity={80} style={StyleSheet.absoluteFill} /> :
            <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(18, 18, 18, 0.94)' }]} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Icon name="home" size={24} color={focused ? THEME.colors.background : color} />
            </View>
          ),
          tabBarLabelStyle: styles.label,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color, focused }) => (
             <View style={[styles.iconContainer, focused && styles.activeIconContainerGreen]}>
                <Icon name="analytics" size={24} color={focused ? THEME.colors.textOnGreen : color} />
             </View>
          ),
          tabBarLabelStyle: styles.label,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          href: null, // Placeholder
          tabBarIcon: ({ color }) => <Icon name="chat-bubble" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          href: null,
          tabBarIcon: ({ color }) => <Icon name="bookmark" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="applied"
        options={{
          title: 'Applied',
          href: null,
          tabBarIcon: ({ color }) => <Icon name="work" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon name="person" size={24} color={color} />,
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
    height: 80,
    paddingBottom: 20,
    paddingTop: 10,
  },
  iconContainer: {
    padding: 4,
    borderRadius: 16,
    width: 64,
    alignItems: 'center',
  },
  activeIconContainer: {
    backgroundColor: '#c2e7ff',
    borderRadius: 20,
    paddingVertical: 4,
  },
  activeIconContainerGreen: {
    backgroundColor: THEME.colors.greenMaterial,
    borderRadius: 20,
    paddingVertical: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
  },
});

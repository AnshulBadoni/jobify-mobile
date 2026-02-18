import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Header } from '../../src/components/Header';
import { Typography } from '../../src/components/Typography';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { Icon } from '../../src/components/Icon';
import { THEME } from '../../src/theme/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScreenContainer>
      <Header
        showBack
        rightAction={
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share" size={20} color={THEME.colors.white} />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Section */}
        <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.heroSection}>
          <View style={styles.logoContainer}>
            {/* Placeholder for Google Logo */}
            <Icon name="search" size={48} color="#4285F4" />
          </View>
          <Typography variant="displayLarge" align="center" style={styles.title}>Senior Software Engineer</Typography>
          <Typography variant="titleLarge" align="center" style={styles.company}>Google</Typography>

          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Typography variant="labelSmall" style={styles.tagText}>Mountain View, CA</Typography>
            </View>
            <View style={styles.tag}>
              <Typography variant="labelSmall" style={styles.tagText}>Full-time</Typography>
            </View>
            <View style={styles.tag}>
              <Typography variant="labelSmall" style={styles.tagText}>$160k - $220k</Typography>
            </View>
          </View>
        </Animated.View>

        {/* About */}
        <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.section}>
          <Card variant="charcoal">
            <Typography variant="titleLarge" style={styles.sectionTitle}>About the Job</Typography>
            <Typography variant="bodyLarge" style={styles.description}>
              As a Senior Software Engineer, you will lead the development of next-generation features that reach millions of users. You'll work across the stack to deliver high-quality, scalable solutions in a collaborative environment.
              {'\n\n'}
              You will be responsible for designing complex systems, mentoring junior developers, and contributing to the overall technical strategy of the Flutter ecosystem.
            </Typography>
          </Card>
        </Animated.View>

        {/* Requirements */}
        <Animated.View entering={FadeInDown.delay(300).springify()} style={styles.section}>
          <Card variant="charcoal">
            <Typography variant="titleLarge" style={styles.sectionTitle}>Key Requirements</Typography>
            <View style={styles.reqList}>
              {[
                '5+ years of Flutter experience in production environments',
                'Strong system design skills and architectural knowledge',
                'Experience with Dart and cross-platform optimization',
                'Proficiency in CI/CD and automated testing strategies',
                "Bachelor's or Master's degree in Computer Science"
              ].map((req, index) => (
                <View key={index} style={styles.reqItem}>
                  <Icon name="check-circle" size={20} color={THEME.colors.bluePrimary} style={{ marginTop: 2, marginRight: 12 }} />
                  <Typography variant="bodyLarge" style={{ flex: 1, lineHeight: 22 }}>{req}</Typography>
                </View>
              ))}
            </View>
          </Card>
        </Animated.View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Button
          title="Apply Now"
          onPress={() => {}}
          fullWidth
          style={{ flex: 1, marginRight: 16, height: 56 }}
        />
        <TouchableOpacity style={styles.bookmarkButton}>
          <Icon name="bookmark-border" size={28} color={THEME.colors.white} />
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: THEME.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    marginBottom: 8,
  },
  company: {
    color: THEME.colors.textSecondary,
    marginBottom: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tag: {
    backgroundColor: THEME.colors.blueTonal,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: THEME.colors.blueTonalText,
    fontWeight: '500',
    textTransform: 'none',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    color: THEME.colors.white,
  },
  description: {
    color: THEME.colors.textSecondary,
    lineHeight: 24,
  },
  reqList: {
    gap: 16,
  },
  reqItem: {
    flexDirection: 'row',
    alignItems: 'start',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 24,
    paddingBottom: 40,
    backgroundColor: 'rgba(0,0,0,0.85)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  bookmarkButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

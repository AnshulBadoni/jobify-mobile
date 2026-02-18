import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Typography } from '../../src/components/Typography';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';
import { Chip } from '../../src/components/Chip';
import { THEME } from '../../src/theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ProProfileScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header Profile */}
        <View style={styles.headerProfile}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
              style={styles.avatar}
            />
            <View style={styles.cameraIcon}>
              <Icon name="photo-camera" size={14} color={THEME.colors.white} />
            </View>
          </View>
          <View style={styles.profileText}>
            <Typography variant="displayMedium">Anshul Badoni</Typography>
            <TouchableOpacity style={styles.emailRow}>
              <Typography variant="bodyMedium" style={styles.email}>anshulbadoni359@gmail.com</Typography>
              <Icon name="expand-more" size={16} color={THEME.colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Glass Card */}
        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <LinearGradient
            colors={[THEME.colors.yellowPrimary, '#FFB300']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.glassCard}
          >
            <TouchableOpacity activeOpacity={0.9} style={styles.glassCardContent}>
              <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                  <Typography variant="labelSmall" style={styles.badgeText}>Quick Info</Typography>
                </View>
              </View>

              <View style={styles.glassRow}>
                <View style={styles.glassIconContainer}>
                  {/* Google Logo Placeholder - simplified with icon or svg if possible */}
                  {/* Using Icon for simplicity in this generated code */}
                  <Icon name="code" size={28} color="#4285F4" />
                </View>
                <View style={{ flex: 1 }}>
                  <Typography variant="displayMedium" style={{ color: THEME.colors.black }}>Software Engineer</Typography>
                  <View style={styles.glassMeta}>
                    <Typography variant="bodyLarge" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: 'bold' }}>Google LLC</Typography>
                    <View style={styles.dot} />
                    <Typography variant="bodyMedium" style={{ color: 'rgba(0,0,0,0.8)', fontWeight: 'bold' }}>5+ Years Exp.</Typography>
                  </View>
                  <View style={styles.topTalentBadge}>
                    <Icon name="star" size={14} color={THEME.colors.white} />
                    <Typography variant="labelSmall" style={{ color: THEME.colors.white, marginLeft: 4 }}>TOP TALENT</Typography>
                  </View>
                </View>
                <Icon name="chevron-right" color="rgba(0,0,0,0.4)" />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>

        {/* Recommended Settings */}
        <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Recommended</Typography>
          <Card variant="dark" padding={0}>
            <SettingItem
              icon="security"
              iconColor="#1a73e8"
              title="Security"
              subtitle="Settings and recommendations to help keep your account secure"
            />
            <View style={styles.divider} />
            <SettingItem
              icon="password"
              iconColor="#f9ab00"
              title="Password"
              subtitle="Last changed 4 Sept 2022"
            />
            <View style={styles.divider} />
            <SettingItem
              icon="hub"
              iconColor="#d93025"
              title="Third-party connections"
              subtitle="Manage connections to other accounts"
            />
          </Card>
        </Animated.View>

        {/* Skills */}
        <Animated.View entering={FadeInDown.delay(300).springify()} style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Skills</Typography>
          <Card variant="dark">
            <View style={styles.chipsContainer}>
              <Chip label="Flutter" icon="flutter-dash" color={THEME.colors.blueTonal} textColor={THEME.colors.blueTonalText} />
              <Chip label="React" icon="code" color={THEME.colors.cyanTonal} textColor={THEME.colors.cyanTonalText} />
              <Chip label="Python" icon="terminal" color={THEME.colors.yellowTonal} textColor={THEME.colors.yellowTonalText} />
              <Chip label="UX Design" icon="palette" color={THEME.colors.purpleTonal} textColor={THEME.colors.purpleTonalText} />
              <Chip label="System Design" icon="account-tree" color={THEME.colors.greenTonal} textColor={THEME.colors.greenTonalText} />
              <Chip label="Add Skill" icon="add" variant="outlined" />
            </View>
          </Card>
        </Animated.View>

        {/* Certifications */}
        <Animated.View entering={FadeInDown.delay(400).springify()} style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Certifications</Typography>
          <Card variant="dark" padding={0}>
            <CertItem
              title="Google Cloud Professional"
              subtitle="Google • Issued Jan 2024"
              color="#a8c8ff"
            />
            <View style={styles.dividerIndent} />
            <CertItem
              title="AWS Solutions Architect"
              subtitle="Amazon Web Services • Issued Nov 2023"
              color="#ffe9a8"
              icon="architecture"
            />
            <View style={styles.dividerIndent} />
            <CertItem
              title="Meta Frontend Developer"
              subtitle="Meta • Issued Aug 2023"
              color="#ebcaff"
              icon="developer-mode"
            />
          </Card>
        </Animated.View>

        {/* Work Experience */}
        <Animated.View entering={FadeInDown.delay(500).springify()} style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Work Experience</Typography>
          <Card variant="dark">
            <View style={styles.timelineLine} />
            <ExperienceItem
              title="Senior Software Engineer"
              subtitle="Meta • Jan 2021 - Dec 2023"
              icon="facebook" // using vector icon closest match
            />
            <ExperienceItem
              title="Software Engineer II"
              subtitle="Google • May 2018 - Dec 2020"
              icon="google" // might not exist in MaterialIcons, fallback
              isGoogle
            />
            <ExperienceItem
              title="Frontend Intern"
              subtitle="Amazon • Jun 2017 - Apr 2018"
              icon="shopping-cart"
            />
          </Card>
        </Animated.View>

      </ScrollView>
    </ScreenContainer>
  );
}

const SettingItem = ({ icon, iconColor, title, subtitle }: any) => (
  <TouchableOpacity style={styles.settingItem}>
    <View style={[styles.settingIconContainer, { backgroundColor: iconColor }]}>
      <Icon name={icon} size={20} color={THEME.colors.white} />
    </View>
    <View style={{ flex: 1 }}>
      <Typography variant="bodyLarge" style={{ fontWeight: '500' }}>{title}</Typography>
      <Typography variant="bodyMedium" style={{ fontSize: 13 }}>{subtitle}</Typography>
    </View>
    <Icon name="chevron-right" color={THEME.colors.textSecondary} />
  </TouchableOpacity>
);

const CertItem = ({ title, subtitle, color, icon = 'verified' }: any) => (
  <TouchableOpacity style={styles.settingItem}>
    <LinearGradient
      colors={['#3c4043', '#1f1f1f']}
      style={styles.certBadge}
    >
      <Icon name={icon as any} size={28} color={color} />
    </LinearGradient>
    <View style={{ flex: 1 }}>
      <Typography variant="bodyLarge" style={{ fontWeight: 'bold' }}>{title}</Typography>
      <Typography variant="bodyMedium" style={{ fontSize: 13 }}>{subtitle}</Typography>
    </View>
    <Icon name="open-in-new" size={20} color={THEME.colors.textSecondary} />
  </TouchableOpacity>
);

const ExperienceItem = ({ title, subtitle, icon, isGoogle }: any) => (
  <View style={styles.experienceItem}>
    <View style={styles.expIconContainer}>
       <Icon name={icon || 'work'} size={20} color="black" />
    </View>
    <View style={{ flex: 1, paddingBottom: 16 }}>
      <Typography variant="bodyLarge" style={{ fontWeight: 'bold' }}>{title}</Typography>
      <Typography variant="bodyMedium" style={{ fontSize: 13 }}>{subtitle}</Typography>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 60, // Header spacing
    paddingBottom: 100, // Tab bar spacing
  },
  headerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: '#1f1f1f',
    padding: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: THEME.colors.black,
  },
  profileText: {
    flex: 1,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    marginRight: 4,
  },
  glassCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden', // Required for borderRadius on Gradient
  },
  glassCardContent: {
    padding: 24,
    minHeight: 160,
  },
  badgeContainer: {
    position: 'absolute',
    top: 16,
    right: 24,
    zIndex: 1,
  },
  badge: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  badgeText: {
    color: THEME.colors.white,
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 0.8,
  },
  glassRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  glassIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: THEME.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  glassMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: 8,
  },
  topTalentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingLeft: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.colors.divider,
    marginLeft: 72,
    marginRight: 16,
  },
  dividerIndent: {
    height: 1,
    backgroundColor: THEME.colors.divider,
    marginLeft: 72,
    marginRight: 16,
    opacity: 0.5,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 4,
  },
  certBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  timelineLine: {
    position: 'absolute',
    left: 40,
    top: 24,
    bottom: 24,
    width: 2,
    backgroundColor: THEME.colors.divider,
  },
  experienceItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  expIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: THEME.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
});

import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Header } from '../../src/components/Header';
import { Typography } from '../../src/components/Typography';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { Icon } from '../../src/components/Icon';
import { Chip } from '../../src/components/Chip';
import { TimelineItem } from '../../src/components/TimelineItem';
import { THEME } from '../../src/theme/theme';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ProfessionalProfileScreen() {
  return (
    <ScreenContainer>
      <Header title="Professional Profile" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.profileSection}>
          <Card variant="charcoal" style={styles.profileCard}>
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={['#d2e3fc', '#b7eab9', '#fde293', '#f8ad9d']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.activeRing}
              >
                <View style={styles.avatarBorder}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                    style={styles.avatar}
                  />
                </View>
              </LinearGradient>
            </View>

            <Typography variant="displayMedium" align="center" style={styles.name}>Anshul Badoni</Typography>
            <Typography variant="bodyLarge" align="center" style={styles.role}>Senior Software Engineer</Typography>

            <View style={styles.ratingContainer}>
              <Typography variant="labelLarge" style={styles.ratingText}>4.5</Typography>
              <Icon name="star" size={20} color={THEME.colors.yellowDark} />
              <Icon name="star" size={20} color={THEME.colors.yellowDark} />
              <Icon name="star" size={20} color={THEME.colors.yellowDark} />
              <Icon name="star" size={20} color={THEME.colors.yellowDark} />
              <Icon name="star-half" size={20} color={THEME.colors.yellowDark} />
            </View>
          </Card>
        </Animated.View>

        {/* Resume */}
        <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>Resume</Typography>
          <Card variant="charcoal">
            <View style={styles.fileRow}>
              <View style={styles.fileInfo}>
                <View style={styles.fileIcon}>
                  <Icon name="description" color={THEME.colors.greenLight} />
                </View>
                <View>
                  <Typography variant="labelLarge">resume_ansh.pdf</Typography>
                  <Typography variant="labelSmall" style={{ textTransform: 'none' }}>Updated 2 days ago</Typography>
                </View>
              </View>
              <Icon name="check-circle" color={THEME.colors.greenLight} />
            </View>
            <Button
              title="Download Resume"
              variant="primary"
              icon="download"
              onPress={() => {}}
              style={{ marginTop: 16 }}
              fullWidth
            />
          </Card>
        </Animated.View>

        {/* Experience */}
        <Animated.View entering={FadeInDown.delay(300).springify()} style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>Professional Experience</Typography>
          <Card variant="charcoal">
            <Typography variant="bodyMedium" style={styles.bio}>
              Passionate Software Engineer with 5+ years of experience in building scalable mobile and web applications. Dedicated to creating high-fidelity user experiences with clean, maintainable code.
            </Typography>
            <View style={styles.divider} />

            <View style={styles.timelineContainer}>
              <TimelineItem
                title="Senior Software Engineer"
                company="Google"
                duration="Jan 2021 — Present"
                description="Leading the mobile platform team, improving app performance by 40% and overseeing the migration to modern micro-frontend architecture."
                logo="https://lh3.googleusercontent.com/aida-public/AB6AXuBhNl5g811srWqvIRnRs4Am_F_jZSQFqRZgnmlbCOeLXmu7YjKtuvZHTLQb61Goxf0qvl6zqbbVFc8C95f96k89039w9wrN2DVm9W1b3cFzPqYE0iXPx9blZooJLZwXDhlYA50640xpRFqucm99kQaNye9F4zh7lHsL1n2xKdy9TM4cIXSacz4ctBQUwXbcq_AP3mnyO2zl4CwbN-U7s9Q9FN4pkHkv0AwasevgLHlJKmyAAXHFlgR-2ylYMlE1mh7pfFgc7zSVD_c6"
              />
              <TimelineItem
                title="Full Stack Developer"
                company="Amazon"
                duration="Jun 2018 — Dec 2020"
                description="Developed and maintained 15+ client projects using React, Node.js, and AWS. Collaborated with designers to implement high-fidelity UI components."
                logo="https://lh3.googleusercontent.com/aida-public/AB6AXuDLiUNikaZPKVn_4eH1yx0loasOhphn0q00nAQDYWyR_pVJ6LwdEUkRqR-fVlj8dEfBeFo24Wm3JvuaTraXX5RhXexkUgCZzMrUrHBsSVbHflKteXLD-ItjaqYyLQxUEI8o9SC9xVS6rZkqQyjMbGRvXjHiX-TbFlInEO30FtA8wPPnSH2T-QCCGro1kSki7Wr6kEFBfhTPOaBUaSIdxtcOtLLnzwzNwAP0U6JzHvUPty9HliOanN7xxfiWDVV6BPvYsRAjZ6rokZEC"
                isLast
              />
            </View>
          </Card>
        </Animated.View>

        {/* Skills */}
        <Animated.View entering={FadeInDown.delay(400).springify()} style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>Skills</Typography>
          <Card variant="charcoal">
            <View style={styles.chipsContainer}>
              {['Flutter', 'React', 'Python', 'UX Design', 'System Design', 'Node.js', 'AWS'].map((skill) => (
                <Chip key={skill} label={skill} variant="tonal" />
              ))}
            </View>
          </Card>
        </Animated.View>

        {/* Certifications */}
        <Animated.View entering={FadeInDown.delay(500).springify()} style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>Certifications</Typography>
          <Card variant="charcoal">
            <View style={styles.certItem}>
              <View style={styles.certInfo}>
                <View style={styles.certIcon}>
                  <Icon name="verified" color={THEME.colors.greenLight} />
                </View>
                <View>
                  <Typography variant="labelLarge">AWS Certified Developer</Typography>
                  <Typography variant="labelSmall" style={{ textTransform: 'none' }}>Amazon Web Services</Typography>
                </View>
              </View>
              <Icon name="open-in-new" size={20} color={THEME.colors.textSecondary} />
            </View>
            <View style={styles.divider} />
            <View style={styles.certItem}>
              <View style={styles.certInfo}>
                <View style={styles.certIcon}>
                  <Icon name="verified" color={THEME.colors.greenLight} />
                </View>
                <View>
                  <Typography variant="labelLarge">Professional Scrum Master I</Typography>
                  <Typography variant="labelSmall" style={{ textTransform: 'none' }}>Scrum.org</Typography>
                </View>
              </View>
              <Icon name="open-in-new" size={20} color={THEME.colors.textSecondary} />
            </View>
          </Card>
        </Animated.View>

        <View style={styles.homeIndicator} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: THEME.spacing.s24,
    paddingBottom: 40,
  },
  section: {
    marginBottom: THEME.spacing.s24,
  },
  sectionTitle: {
    marginBottom: THEME.spacing.s12,
    paddingHorizontal: 4,
    letterSpacing: 1.5,
  },
  profileSection: {
    marginBottom: THEME.spacing.s24,
    alignItems: 'center',
  },
  profileCard: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  activeRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarBorder: {
    width: 98,
    height: 98,
    borderRadius: 49,
    backgroundColor: THEME.colors.cardVariant,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: THEME.colors.cardVariant,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    marginBottom: 4,
  },
  role: {
    color: THEME.colors.textSecondary,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
  fileRow: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: THEME.radius.r12,
    padding: THEME.spacing.s16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME.spacing.s12,
  },
  bio: {
    marginBottom: 24,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.colors.divider,
    opacity: 0.5,
    marginVertical: 16,
  },
  timelineContainer: {
    marginTop: 8,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  certItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  certInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  certIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME.spacing.s12,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: THEME.colors.divider,
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: 24,
    opacity: 0.4,
  },
});

import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { THEME } from '../../src/theme/theme';
import { Typography } from '../../src/components/Typography';
import { Chip } from '../../src/components/Chip';
import { Icon } from '../../src/components/Icon';
import { Header } from '../../src/components/Header';
import { TimelineItem } from '../../src/components/TimelineItem';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Button } from '../../src/components/Button';

export default function ProfileScreen() {
  return (
    <ScreenContainer>
      <Header title="Professional Profile" showBack={false} />

      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 100 }}>

        {/* Profile Header Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarRing}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                style={styles.avatar}
              />
            </View>
          </View>
          <Typography variant="displayMedium" style={{ textAlign: 'center', marginTop: 16 }}>Anshul Badoni</Typography>
          <Typography variant="bodyLarge" style={{ textAlign: 'center', color: THEME.colors.textSecondary, marginTop: 4 }}>Senior Software Engineer</Typography>

          <View style={styles.ratingContainer}>
            <Typography variant="labelLarge" style={{ fontWeight: 'bold', marginRight: 4 }}>4.5</Typography>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={18} color={THEME.colors.yellowSunflower} />
              <Icon name="star" size={18} color={THEME.colors.yellowSunflower} />
              <Icon name="star" size={18} color={THEME.colors.yellowSunflower} />
              <Icon name="star" size={18} color={THEME.colors.yellowSunflower} />
              <Icon name="star-half" size={18} color={THEME.colors.yellowSunflower} />
            </View>
          </View>
        </View>

        {/* Resume Section */}
        <View style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>RESUME</Typography>
          <View style={styles.resumeCard}>
            <View style={styles.resumeInfo}>
              <View style={styles.resumeIcon}>
                <Icon name="description" size={24} color={THEME.colors.greenMaterial} />
              </View>
              <View style={{ flex: 1 }}>
                <Typography variant="labelLarge">resume_ansh.pdf</Typography>
                <Typography variant="labelSmall" style={{ marginTop: 2 }}>Updated 2 days ago</Typography>
              </View>
              <Icon name="check-circle" size={24} color={THEME.colors.greenMaterial} />
            </View>
            <Button
              title="Download Resume"
              icon="download"
              variant="primary"
              fullWidth
              style={{ marginTop: 16, backgroundColor: THEME.colors.greenMaterial }}
              textStyle={{ color: THEME.colors.textOnGreen }}
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Typography>
          <View style={styles.experienceCard}>
            <Typography variant="bodyMedium" style={{ marginBottom: 24, lineHeight: 22 }}>
              Passionate Software Engineer with 5+ years of experience in building scalable mobile and web applications. Dedicated to creating high-fidelity user experiences with clean, maintainable code.
            </Typography>
            <View style={styles.divider} />

            <View style={{ marginTop: 24 }}>
              <TimelineItem
                company="Google"
                role="Senior Software Engineer"
                date="Jan 2021 — Present"
                description="Leading the mobile platform team, improving app performance by 40% and overseeing the migration to modern micro-frontend architecture."
                logoUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBhNl5g811srWqvIRnRs4Am_F_jZSQFqRZgnmlbCOeLXmu7YjKtuvZHTLQb61Goxf0qvl6zqbbVFc8C95f96k89039w9wrN2DVm9W1b3cFzPqYE0iXPx9blZooJLZwXDhlYA50640xpRFqucm99kQaNye9F4zh7lHsL1n2xKdy9TM4cIXSacz4ctBQUwXbcq_AP3mnyO2zl4CwbN-U7s9Q9FN4pkHkv0AwasevgLHlJKmyAAXHFlgR-2ylYMlE1mh7pfFgc7zSVD_c6"
              />
              <TimelineItem
                company="Amazon"
                role="Full Stack Developer"
                date="Jun 2018 — Dec 2020"
                description="Developed and maintained 15+ client projects using React, Node.js, and AWS. Collaborated with designers to implement high-fidelity UI components."
                logoUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDLiUNikaZPKVn_4eH1yx0loasOhphn0q00nAQDYWyR_pVJ6LwdEUkRqR-fVlj8dEfBeFo24Wm3JvuaTraXX5RhXexkUgCZzMrUrHBsSVbHflKteXLD-ItjaqYyLQxUEI8o9SC9xVS6rZkqQyjMbGRvXjHiX-TbFlInEO30FtA8wPPnSH2T-QCCGro1kSki7Wr6kEFBfhTPOaBUaSIdxtcOtLLnzwzNwAP0U6JzHvUPty9HliOanN7xxfiWDVV6BPvYsRAjZ6rokZEC"
                isLast
              />
            </View>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>SKILLS</Typography>
          <View style={styles.skillsCard}>
            <View style={styles.skillsWrapper}>
              <Chip label="Flutter" variant="filled" />
              <Chip label="React" variant="filled" />
              <Chip label="Python" variant="filled" />
              <Chip label="UX Design" variant="filled" />
              <Chip label="System Design" variant="filled" />
              <Chip label="Node.js" variant="filled" />
              <Chip label="AWS" variant="filled" />
            </View>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>CERTIFICATIONS</Typography>
          <View style={styles.certificationsCard}>
            <CertItem title="AWS Certified Developer" issuer="Amazon Web Services" />
            <View style={[styles.divider, { marginVertical: 16 }]} />
            <CertItem title="Professional Scrum Master I" issuer="Scrum.org" />
          </View>
        </View>

      </ScrollView>
    </ScreenContainer>
  );
}

const CertItem = ({ title, issuer }: any) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.certIcon}>
        <Icon name="verified" size={24} color={THEME.colors.greenMaterial} />
      </View>
      <View>
        <Typography variant="labelLarge">{title}</Typography>
        <Typography variant="labelSmall" style={{ marginTop: 2 }}>{issuer}</Typography>
      </View>
    </View>
    <Icon name="open-in-new" size={20} color={THEME.colors.textSecondary} />
  </View>
);

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    padding: 3,
    // Gradient ring simulated with solid color for now, can be LinearGradient if needed
    backgroundColor: THEME.colors.greenMaterial,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 98,
    height: 98,
    borderRadius: 49,
    borderWidth: 3,
    borderColor: THEME.colors.cardCharcoal,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    paddingLeft: 4,
    letterSpacing: 1,
  },
  resumeCard: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 20,
  },
  resumeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  resumeIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: THEME.colors.tonalGreyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  experienceCard: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 24,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.colors.divider,
    opacity: 0.5,
  },
  skillsCard: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 20,
  },
  skillsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  certificationsCard: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 20,
  },
  certIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: THEME.colors.tonalGreyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});

import React from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { THEME } from '../../src/theme/theme';
import { Typography } from '../../src/components/Typography';
import { Chip } from '../../src/components/Chip';
import { Icon } from '../../src/components/Icon';
import { ScreenContainer } from '../../src/components/ScreenContainer';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

export default function DiscoveryScreen() {
  const router = useRouter();

  const handleJobPress = (id: string) => {
    router.push(`/job/${id}`);
  };

  return (
    <ScreenContainer>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
              style={styles.avatar}
            />
            <View style={styles.cameraIcon}>
              <Icon name="photo-camera" size={14} color="white" />
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Typography variant="headlineMedium">Anshul Badoni</Typography>
            <TouchableOpacity style={styles.emailContainer}>
              <Typography variant="bodyMedium">anshulbadoni359@gmail.com</Typography>
              <Icon name="expand-more" size={16} color={THEME.colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Horizontal Cards */}
        <View style={styles.carouselSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 12} // Card width + gap
            decelerationRate="fast"
            contentContainerStyle={styles.carouselContent}
          >
            {/* Active Role Card */}
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.roleCard, { backgroundColor: THEME.colors.yellowMaterial }]}
            >
              <View style={styles.cardHeader}>
                <View style={styles.logoCircleWhite}>
                  <Icon name="code" size={28} color="black" />
                </View>
                <View style={styles.badgeBlack}>
                  <Typography variant="labelSmall" style={{ color: 'white', fontSize: 10 }}>ACTIVE ROLE</Typography>
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <Typography variant="displayMedium" style={{ color: 'black' }}>Software Engineer</Typography>
                <View style={styles.roleMeta}>
                  <Typography variant="bodyLarge" style={{ color: 'rgba(0,0,0,0.9)', fontWeight: 'bold' }}>Tech Corp</Typography>
                  <View style={styles.dotSeparator} />
                  <Typography variant="bodyMedium" style={{ color: 'rgba(0,0,0,0.8)', fontWeight: 'bold' }}>5+ Years Exp.</Typography>
                </View>
              </View>
            </TouchableOpacity>

            {/* Target Role Card */}
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.roleCard, { backgroundColor: THEME.colors.bluePrimary }]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.logoCircleWhite, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                  <Icon name="terminal" size={28} color="white" />
                </View>
                <View style={[styles.badgeBlack, { backgroundColor: 'rgba(0,0,0,0.2)' }]}>
                  <Typography variant="labelSmall" style={{ color: 'white', fontSize: 10 }}>TARGET ROLE</Typography>
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <Typography variant="displayMedium" style={{ color: 'white' }}>Senior Tech Lead</Typography>
                <View style={styles.roleMeta}>
                  <Typography variant="bodyLarge" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 'bold' }}>Strategic Vision</Typography>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Indicators */}
          <View style={styles.indicators}>
            <View style={[styles.indicator, { backgroundColor: 'white' }]} />
            <View style={[styles.indicator, { backgroundColor: 'rgba(255,255,255,0.2)' }]} />
          </View>
        </View>

        {/* Recommended Jobs */}
        <View style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Recommended Jobs</Typography>
          <View style={styles.jobList}>
            <JobItem
              company="Google"
              role="Senior Software Engineer"
              location="Mountain View, CA"
              logoIcon="language" // Using generic icon as Google logo fallback
              logoColor="#4285F4"
              onPress={() => handleJobPress('google')}
            />
            <JobItem
              company="Amazon"
              role="Cloud Infrastructure Lead"
              location="Seattle, WA"
              logoIcon="shopping-cart"
              logoColor="#FF9900"
              onPress={() => handleJobPress('amazon')}
            />
            <JobItem
              company="Meta"
              role="Full Stack Developer"
              location="Menlo Park, CA"
              logoIcon="groups"
              logoColor="#0668E1"
              onPress={() => handleJobPress('meta')}
            />
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Skills</Typography>
          <View style={styles.skillsContainer}>
            <View style={styles.skillsWrapper}>
              <Chip label="Flutter" icon="flutter-dash" variant="filled" color={THEME.colors.blueTonal} textColor={THEME.colors.blueTonalText} />
              <Chip label="React" icon="code" variant="filled" color={THEME.colors.cyanTonal} textColor={THEME.colors.cyanTonalText} />
              <Chip label="Python" icon="terminal" variant="filled" color={THEME.colors.yellowTonal} textColor={THEME.colors.yellowTonalText} />
              <Chip label="Add Skill" icon="add" variant="outlined" textColor={THEME.colors.textSecondary} />
            </View>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Certifications</Typography>
          <TouchableOpacity style={styles.certItem}>
            <View style={styles.certIcon}>
              <Icon name="verified" size={28} color={THEME.colors.blueTonalText} />
            </View>
            <View style={{ flex: 1 }}>
              <Typography variant="titleMedium" style={{ fontWeight: 'bold' }}>Cloud Professional</Typography>
              <Typography variant="bodyMedium">Jan 2024</Typography>
            </View>
            <Icon name="open-in-new" size={20} color={THEME.colors.textSecondary} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </ScreenContainer>
  );
}

const JobItem = ({ company, role, location, logoIcon, logoColor, onPress }: any) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.jobItem}>
    <View style={styles.jobContent}>
      <View style={styles.jobLogo}>
        <Icon name={logoIcon} size={24} color={logoColor} />
      </View>
      <View>
        <Typography variant="titleMedium" style={{ fontSize: 15, fontWeight: '500' }}>{role}</Typography>
        <Typography variant="labelSmall" style={{ marginTop: 2 }}>{company} • {location}</Typography>
      </View>
    </View>
    <View style={styles.quickApplyBtn}>
      <Typography style={{ color: THEME.colors.blueTonalText, fontSize: 12, fontWeight: 'bold' }}>Quick Apply</Typography>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
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
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    padding: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  profileInfo: {
    marginLeft: 16,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  carouselSection: {
    marginBottom: 32,
  },
  carouselContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  roleCard: {
    width: CARD_WIDTH,
    minHeight: 160,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logoCircleWhite: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  badgeBlack: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 8,
  },
  dotSeparator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    marginLeft: 8,
    marginBottom: 16,
  },
  jobList: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 8,
    gap: 8,
  },
  jobItem: {
    backgroundColor: THEME.colors.cardSurface,
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  jobLogo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  quickApplyBtn: {
    backgroundColor: THEME.colors.blueTonal,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  skillsContainer: {
    backgroundColor: THEME.colors.cardVariant,
    borderRadius: 16,
    padding: 20,
  },
  skillsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  certItem: {
    backgroundColor: THEME.colors.cardVariant,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  certIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
});

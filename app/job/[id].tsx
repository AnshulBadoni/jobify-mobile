import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { THEME } from '../../src/theme/theme';
import { Typography } from '../../src/components/Typography';
import { Button } from '../../src/components/Button';
import { Icon } from '../../src/components/Icon';
import { ScreenContainer } from '../../src/components/ScreenContainer';

const { width } = Dimensions.get('window');

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Icon name="arrow-back-ios-new" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="share" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Job Header */}
        <View style={styles.jobHeader}>
          <View style={styles.logoCircle}>
             {/* Using different icons based on ID for demo purposes */}
             <Icon
               name={id === 'amazon' ? 'shopping-cart' : id === 'meta' ? 'groups' : 'language'}
               size={32}
               color={id === 'amazon' ? '#FF9900' : id === 'meta' ? '#0668E1' : '#4285F4'}
             />
          </View>
          <Typography variant="displayLarge" style={{ textAlign: 'center', marginTop: 16 }}>
             {id === 'amazon' ? 'Cloud Infrastructure Lead' : 'Senior Software Engineer'}
          </Typography>
          <Typography variant="titleLarge" style={{ textAlign: 'center', color: THEME.colors.textSecondary, marginTop: 4 }}>
             {id === 'amazon' ? 'Amazon' : 'Google'}
          </Typography>

          <View style={styles.chipsRow}>
             <View style={styles.chipBlue}>
               <Typography variant="labelMedium" style={{ color: THEME.colors.blueTonalText }}>Mountain View, CA</Typography>
             </View>
             <View style={styles.chipBlue}>
               <Typography variant="labelMedium" style={{ color: THEME.colors.blueTonalText }}>Full-time</Typography>
             </View>
             <View style={styles.chipBlue}>
               <Typography variant="labelMedium" style={{ color: THEME.colors.blueTonalText }}>$160k - $220k</Typography>
             </View>
          </View>
        </View>

        {/* About */}
        <View style={styles.sectionCard}>
          <Typography variant="headlineMedium" style={{ marginBottom: 16 }}>About the Job</Typography>
          <Typography variant="bodyLarge" style={{ color: THEME.colors.textSecondary, lineHeight: 24, marginBottom: 16 }}>
            As a Senior Software Engineer, you will lead the development of next-generation features that reach millions of users. You'll work across the stack to deliver high-quality, scalable solutions in a collaborative environment.
          </Typography>
          <Typography variant="bodyLarge" style={{ color: THEME.colors.textSecondary, lineHeight: 24 }}>
            You will be responsible for designing complex systems, mentoring junior developers, and contributing to the overall technical strategy of the Flutter ecosystem.
          </Typography>
        </View>

        {/* Requirements */}
        <View style={styles.sectionCard}>
          <Typography variant="headlineMedium" style={{ marginBottom: 16 }}>Key Requirements</Typography>
          <View style={{ gap: 16 }}>
             <RequirementItem text="5+ years of Flutter experience in production environments" />
             <RequirementItem text="Strong system design skills and architectural knowledge" />
             <RequirementItem text="Experience with Dart and cross-platform optimization" />
             <RequirementItem text="Proficiency in CI/CD and automated testing strategies" />
             <RequirementItem text="Bachelor's or Master's degree in Computer Science" />
          </View>
        </View>

      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <Button
          title="Apply Now"
          fullWidth
          variant="secondary"
          style={{ flex: 1, marginRight: 16 }}
          onPress={() => {}}
        />
        <TouchableOpacity style={styles.bookmarkBtn}>
           <Icon name="bookmark-border" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const RequirementItem = ({ text }: { text: string }) => (
  <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
    <Icon name="check-circle" size={20} color={THEME.colors.bluePrimary} style={{ marginTop: 2, marginRight: 12 }} />
    <Typography variant="bodyLarge" style={{ flex: 1, color: THEME.colors.textSecondary }}>{text}</Typography>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  jobHeader: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 32,
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
  },
  chipBlue: {
    backgroundColor: THEME.colors.blueTonal,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sectionCard: {
    backgroundColor: THEME.colors.cardCharcoal,
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40, // for home indicator
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  bookmarkBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

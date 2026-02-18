import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Typography } from '../../src/components/Typography';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';
import { Button } from '../../src/components/Button';
import { THEME } from '../../src/theme/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const JOB_DATA = [
  {
    id: '1',
    company: 'Google',
    role: 'Senior Software Engineer',
    location: 'Mountain View, CA',
    logoColor: '#ffffff',
    icon: 'google', // specialized icon or placeholder
    iconColor: '#4285F4',
  },
  {
    id: '2',
    company: 'Amazon',
    role: 'Cloud Infrastructure Lead',
    location: 'Seattle, WA',
    logoColor: '#000000',
    icon: 'amazon', // placeholder
    iconColor: '#ffffff',
  },
  {
    id: '3',
    company: 'Meta',
    role: 'Full Stack Developer',
    location: 'Menlo Park, CA',
    logoColor: '#0668E1',
    icon: 'facebook',
    iconColor: '#ffffff',
  },
  {
    id: '4',
    company: 'Netflix',
    role: 'Backend Engineer',
    location: 'Los Gatos, CA',
    logoColor: '#E50914',
    icon: 'movie', // placeholder
    iconColor: '#ffffff',
  },
];

export default function JobSearchScreen() {
  const router = useRouter();

  const handleJobPress = (id: string) => {
    router.push(`/job/${id}`);
  };

  return (
    <ScreenContainer>
      <View style={styles.headerContainer}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="search" color={THEME.colors.textSecondary} style={{ marginRight: 12 }} />
            <Typography variant="bodyLarge" style={{ fontWeight: '500' }}>Software Engineer</Typography>
          </View>
          <Icon name="tune" color={THEME.colors.textSecondary} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipScroll}
          contentContainerStyle={styles.chipContent}
        >
          {['Remote', 'Full-time', 'Salary', 'Entry level', 'Senior'].map((filter) => (
            <TouchableOpacity key={filter} style={styles.filterChip}>
              <Typography variant="labelSmall" style={styles.filterText}>{filter}</Typography>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Recommended Jobs</Typography>

          <View style={styles.jobList}>
            {JOB_DATA.map((job, index) => (
              <Animated.View key={job.id} entering={FadeInDown.delay(index * 100).springify()}>
                <TouchableOpacity onPress={() => handleJobPress(job.id)} activeOpacity={0.7}>
                  <Card variant="default" style={styles.jobCard}>
                    <View style={styles.jobRow}>
                      <View style={styles.jobInfo}>
                        <View style={[styles.logoContainer, { backgroundColor: job.logoColor }]}>
                          {/* Using generic icons as placeholders for company logos */}
                          {job.company === 'Google' && <Icon name="search" size={24} color={job.iconColor} />}
                          {job.company === 'Amazon' && <Icon name="shopping-cart" size={24} color={job.iconColor} />}
                          {job.company === 'Meta' && <Icon name="facebook" size={24} color={job.iconColor} />}
                          {job.company === 'Netflix' && <Typography style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>N</Typography>}
                        </View>
                        <View>
                          <Typography variant="bodyLarge" style={{ fontWeight: 'bold', marginBottom: 2 }}>
                            {job.role}
                          </Typography>
                          <Typography variant="labelSmall" style={{ textTransform: 'none' }}>
                            {job.company} • {job.location}
                          </Typography>
                        </View>
                      </View>
                      <Button
                        title="Quick Apply"
                        variant="tonal"
                        style={styles.applyButton}
                        textStyle={{ color: THEME.colors.blueTonalText, fontSize: 13 }}
                        onPress={() => {}}
                      />
                    </View>
                  </Card>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        </View>

        {/* Padding for Bottom Tab Bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.colors.cardVariant,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  scrollContent: {
    // paddingHorizontal: 16,
  },
  chipScroll: {
    maxHeight: 50,
    marginBottom: 24,
  },
  chipContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterChip: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    height: 36,
    justifyContent: 'center',
  },
  filterText: {
    color: THEME.colors.textPrimary,
    textTransform: 'none',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingLeft: 8,
  },
  jobList: {
    gap: 12,
  },
  jobCard: {
    marginBottom: 0,
  },
  jobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  applyButton: {
    backgroundColor: THEME.colors.blueTonal,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 36,
  },
});

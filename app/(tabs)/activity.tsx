import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { THEME } from '../../src/theme/theme';
import { Typography } from '../../src/components/Typography';
import { Icon } from '../../src/components/Icon';
import { ScreenContainer } from '../../src/components/ScreenContainer';

export default function ActivityScreen() {
  const [selectedTab, setSelectedTab] = useState<'applied' | 'review' | 'offers'>('applied');

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Typography variant="displayMedium" style={{ fontSize: 32 }}>Activity</Typography>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Activity Overview */}
        <View style={styles.section}>
          <View style={styles.overviewCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Typography variant="labelSmall" style={{ color: 'rgba(255,255,255,0.6)' }}>ACTIVITY OVERVIEW</Typography>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 4 }}>
                  <Typography variant="displayLarge" style={{ color: THEME.colors.greenMaterial }}>84%</Typography>
                  <Typography variant="labelSmall" style={{ marginLeft: 8, color: 'rgba(255,255,255,0.4)' }}>PROFILE STRENGTH</Typography>
                </View>
              </View>
              <View style={styles.boltIcon}>
                <Icon name="bolt" size={24} color={THEME.colors.greenMaterial} />
              </View>
            </View>

            <View style={styles.statsRow}>
               <View style={styles.statChipGreen}>
                  <Typography variant="labelSmall" style={{ color: THEME.colors.greenMaterial }}>12 INTERVIEWS</Typography>
               </View>
               <View style={styles.statChipWhite}>
                  <Typography variant="labelSmall" style={{ color: 'white' }}>48 VIEWS</Typography>
               </View>
            </View>

            {/* Chart Approximation */}
            <View style={styles.chartContainer}>
               <View style={[styles.bar, { height: '45%', backgroundColor: 'rgba(183, 234, 185, 0.2)' }]} />
               <View style={[styles.bar, { height: '65%', backgroundColor: 'rgba(183, 234, 185, 0.4)' }]} />
               <View style={[styles.bar, { height: '50%', backgroundColor: 'rgba(183, 234, 185, 0.3)' }]} />
               <View style={[styles.bar, { height: '85%', backgroundColor: 'rgba(183, 234, 185, 0.6)' }]} />
               <View style={[styles.bar, { height: '100%', backgroundColor: THEME.colors.greenMaterial }]} />
               <View style={[styles.bar, { height: '40%', backgroundColor: 'rgba(183, 234, 185, 0.2)' }]} />
               <View style={[styles.bar, { height: '30%', backgroundColor: 'rgba(183, 234, 185, 0.3)' }]} />
            </View>
          </View>
        </View>

        {/* Horizontal Insights */}
        <View style={styles.section}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}>
            <View style={styles.insightCard}>
               <Typography variant="labelSmall" style={{ color: 'rgba(255,255,255,0.6)' }}>MOST VIEWED BY</Typography>
               <View style={styles.avatarsRow}>
                  <View style={styles.avatarCircle}><Icon name="apartment" size={16} color="black" /></View>
                  <View style={styles.avatarCircle}><Icon name="business" size={16} color="black" /></View>
                  <View style={styles.avatarCircle}><Icon name="store" size={16} color="black" /></View>
                  <View style={[styles.avatarCircle, { backgroundColor: THEME.colors.surfaceContainerHigh }]}>
                      <Typography variant="labelSmall" style={{ fontSize: 10 }}>+4</Typography>
                  </View>
               </View>
               <Typography variant="bodyMedium" style={{ fontSize: 12, opacity: 0.5 }}>Top Tech Companies in the last 7 days</Typography>
            </View>

            <View style={styles.insightCard}>
               <Typography variant="labelSmall" style={{ color: 'rgba(255,255,255,0.6)' }}>SKILLS IN DEMAND</Typography>
               <View style={styles.skillsRow}>
                  <View style={styles.skillTagGreen}><Typography variant="labelSmall" style={{ fontSize: 10, color: THEME.colors.greenMaterial }}>Material 3</Typography></View>
                  <View style={styles.skillTagGreen}><Typography variant="labelSmall" style={{ fontSize: 10, color: THEME.colors.greenMaterial }}>Figma</Typography></View>
                  <View style={styles.skillTagWhite}><Typography variant="labelSmall" style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>Prototyping</Typography></View>
               </View>
               <Typography variant="bodyMedium" style={{ fontSize: 12, opacity: 0.5 }}>Matched with 8 new opportunities</Typography>
            </View>
          </ScrollView>
        </View>

        {/* Segmented Button */}
        <View style={styles.sectionPadding}>
          <View style={styles.segmentedControl}>
            <TouchableOpacity
              style={[styles.segment, selectedTab === 'applied' && styles.segmentActive]}
              onPress={() => setSelectedTab('applied')}
            >
              {selectedTab === 'applied' && <Icon name="check" size={16} color={THEME.colors.textOnGreen} style={{ marginRight: 4 }} />}
              <Typography variant="labelLarge" style={{ color: selectedTab === 'applied' ? THEME.colors.textOnGreen : 'rgba(255,255,255,0.7)' }}>Applied</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.segment, selectedTab === 'review' && styles.segmentActive]}
              onPress={() => setSelectedTab('review')}
            >
              <Typography variant="labelLarge" style={{ color: selectedTab === 'review' ? THEME.colors.textOnGreen : 'rgba(255,255,255,0.7)' }}>Review</Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.segment, selectedTab === 'offers' && styles.segmentActive]}
              onPress={() => setSelectedTab('offers')}
            >
              <Typography variant="labelLarge" style={{ color: selectedTab === 'offers' ? THEME.colors.textOnGreen : 'rgba(255,255,255,0.7)' }}>Offers</Typography>
            </TouchableOpacity>
          </View>
        </View>

        {/* List */}
        <View style={styles.sectionPadding}>
          <View style={{ gap: 16 }}>
             <ActivityItem
               role="Senior Product Designer"
               company="Design Co."
               time="Today • 10:45 AM"
               status="Interviewing"
               statusColor={THEME.colors.greenMaterial}
               statusTextColor={THEME.colors.textOnGreen}
               logoIcon="design-services"
             />
             <ActivityItem
               role="UX Researcher"
               company="Tech Lab"
               time="Yesterday • 4:20 PM"
               status="Review"
               statusColor={THEME.colors.yellowSunflower}
               statusTextColor={THEME.colors.textOnYellow}
               logoIcon="science"
             />
             <ActivityItem
               role="Product Lead"
               company="Startup Inc"
               time="Oct 24 • 11:30 AM"
               status="Declined"
               statusColor={THEME.colors.pinkLight}
               statusTextColor={THEME.colors.textOnPink}
               logoIcon="rocket-launch"
             />
             <ActivityItem
               role="Frontend Architect"
               company="Web Systems"
               time="Oct 22 • 09:15 AM"
               status="Review"
               statusColor={THEME.colors.yellowSunflower}
               statusTextColor={THEME.colors.textOnYellow}
               logoIcon="web"
             />
          </View>
        </View>

      </ScrollView>
    </ScreenContainer>
  );
}

const ActivityItem = ({ role, company, time, status, statusColor, statusTextColor, logoIcon }: any) => (
  <View style={styles.activityItem}>
    <View style={styles.logoCircle}>
      <Icon name={logoIcon} size={20} color="black" />
    </View>
    <View style={{ flex: 1, marginHorizontal: 16 }}>
      <Typography variant="titleMedium" numberOfLines={1} style={{ fontWeight: 'bold' }}>{role}</Typography>
      <Typography variant="bodyMedium" style={{ fontSize: 12, opacity: 0.5, marginTop: 2 }}>{time}</Typography>
    </View>
    <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
      <Typography variant="labelSmall" style={{ fontSize: 11, color: statusTextColor, fontWeight: 'bold' }}>{status}</Typography>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionPadding: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  overviewCard: {
    backgroundColor: THEME.colors.surfaceContainer,
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 24,
  },
  boltIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: 'rgba(183, 234, 185, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  statChipGreen: {
    backgroundColor: 'rgba(183, 234, 185, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(183, 234, 185, 0.2)',
  },
  statChipWhite: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  chartContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 8,
  },
  bar: {
    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  insightCard: {
    width: 200,
    backgroundColor: THEME.colors.surfaceContainerLow,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  avatarsRow: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
    borderWidth: 2,
    borderColor: THEME.colors.surfaceContainerLow,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillTagGreen: {
    backgroundColor: 'rgba(183, 234, 185, 0.1)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  skillTagWhite: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: THEME.colors.background,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: THEME.colors.outline,
    padding: 0,
    overflow: 'hidden',
  },
  segment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: THEME.colors.outline,
  },
  segmentActive: {
    backgroundColor: THEME.colors.greenMaterial, // Or dark green bg with light text? Design says active has green bg.
    // Wait, design says: "bg-md-secondary-container text-md-on-secondary-container" which is green-ish.
    backgroundColor: THEME.colors.surfaceContainerHigh, // Let's check logic.
    // Actually "bg-md-secondary-container" is #3E4A36.
    backgroundColor: '#3E4A36',
  },
  activityItem: {
    backgroundColor: THEME.colors.surfaceContainerLow,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
});

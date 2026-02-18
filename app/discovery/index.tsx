import React, { useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Typography } from '../../src/components/Typography';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';
import { Chip } from '../../src/components/Chip';
import { THEME } from '../../src/theme/theme';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const SPACER_WIDTH = (width - CARD_WIDTH) / 2;

const ROLE_CARDS = [
  {
    id: '1',
    role: 'Software Engineer',
    company: 'Tech Corp',
    exp: '5+ Years Exp.',
    color: THEME.colors.yellowPrimary,
    icon: 'code',
    iconBg: THEME.colors.white,
    status: 'Active Role',
    textColor: THEME.colors.black,
  },
  {
    id: '2',
    role: 'Senior Tech Lead',
    company: 'Strategic Vision',
    exp: '',
    color: THEME.colors.bluePrimary,
    icon: 'terminal',
    iconBg: 'rgba(255,255,255,0.2)',
    status: 'Target Role',
    textColor: THEME.colors.white,
  },
];

export default function DiscoveryScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }).current;

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
          <View>
            <Typography variant="displayMedium">Anshul Badoni</Typography>
            <View style={styles.emailRow}>
              <Typography variant="bodyMedium" style={styles.email}>anshulbadoni359@gmail.com</Typography>
              <Icon name="expand-more" size={16} color={THEME.colors.textSecondary} />
            </View>
          </View>
        </View>

        {/* Carousel */}
        <View>
          <FlatList
            data={ROLE_CARDS}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 16}
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 16, paddingRight: 32 }}
            keyExtractor={(item) => item.id}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            renderItem={({ item }) => (
              <View style={[styles.roleCard, { backgroundColor: item.color }]}>
                <View style={styles.roleHeader}>
                  <View style={[styles.roleIconContainer, { backgroundColor: item.iconBg }]}>
                    <Icon name={item.icon as any} size={28} color={item.textColor === 'white' ? 'white' : 'black'} />
                  </View>
                  <View style={styles.statusBadge}>
                    <Typography variant="labelSmall" style={styles.statusText}>{item.status}</Typography>
                  </View>
                </View>
                <View>
                  <Typography variant="displayMedium" style={{ color: item.textColor, fontWeight: '800' }}>{item.role}</Typography>
                  <View style={styles.roleMeta}>
                    <Typography variant="bodyLarge" style={{ color: item.textColor, opacity: 0.9, fontWeight: 'bold' }}>{item.company}</Typography>
                    {item.exp ? (
                      <>
                        <View style={[styles.dot, { backgroundColor: item.textColor, opacity: 0.3 }]} />
                        <Typography variant="bodyMedium" style={{ color: item.textColor, opacity: 0.8, fontWeight: 'bold' }}>{item.exp}</Typography>
                      </>
                    ) : null}
                  </View>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          />

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            {ROLE_CARDS.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  { backgroundColor: index === activeIndex ? THEME.colors.white : 'rgba(255,255,255,0.2)' }
                ]}
              />
            ))}
          </View>
        </View>

        {/* Recommended Jobs */}
        <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Recommended Jobs</Typography>
          <Card variant="charcoal" padding={8}>
            <JobRow company="Google" role="Senior Software Engineer" location="Mountain View, CA" icon="google" color="#4285F4" />
            <JobRow company="Amazon" role="Cloud Infrastructure Lead" location="Seattle, WA" icon="shopping-cart" color="#FF9900" />
            <JobRow company="Meta" role="Full Stack Developer" location="Menlo Park, CA" icon="facebook" color="#0668E1" />
          </Card>
        </Animated.View>

        {/* Skills */}
        <Animated.View entering={FadeInDown.delay(300).springify()} style={styles.section}>
          <Typography variant="titleLarge" style={styles.sectionTitle}>Skills</Typography>
          <Card variant="default">
            <View style={styles.chipsContainer}>
              <Chip label="Flutter" icon="flutter-dash" color={THEME.colors.blueTonal} textColor={THEME.colors.blueTonalText} />
              <Chip label="React" icon="code" color={THEME.colors.cyanTonal} textColor={THEME.colors.cyanTonalText} />
              <Chip label="Python" icon="terminal" color={THEME.colors.yellowTonal} textColor={THEME.colors.yellowTonalText} />
              <Chip label="Add Skill" icon="add" variant="outlined" />
            </View>
          </Card>
        </Animated.View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const JobRow = ({ company, role, location, icon, color }: any) => (
  <TouchableOpacity style={styles.jobRow}>
    <View style={styles.jobInfo}>
      <View style={[styles.jobIconContainer, { backgroundColor: THEME.colors.white }]}>
        <Icon name={icon} size={24} color={color} />
      </View>
      <View>
        <Typography variant="bodyLarge" style={{ fontWeight: '500' }}>{role}</Typography>
        <Typography variant="labelSmall" style={{ textTransform: 'none' }}>{company} • {location}</Typography>
      </View>
    </View>
    <View style={styles.quickApplyBtn}>
      <Typography variant="labelSmall" style={{ color: THEME.colors.blueTonalText, fontWeight: 'bold' }}>Quick Apply</Typography>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 24,
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
    backgroundColor: '#1c1c1c',
    padding: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: THEME.colors.black,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  email: {
    marginRight: 4,
    color: THEME.colors.textSecondary,
  },
  roleCard: {
    width: CARD_WIDTH,
    height: 180,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'space-between',
  },
  roleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  roleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  statusBadge: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 0.8,
  },
  roleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 8,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 24,
    gap: 6,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingLeft: 8,
  },
  jobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: THEME.colors.gray850, // card surface
    borderRadius: 12,
    marginBottom: 8,
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  jobIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  quickApplyBtn: {
    backgroundColor: THEME.colors.blueTonal,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 4,
  },
});

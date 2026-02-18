import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Typography } from './Typography';
import { THEME } from '../theme/theme';

export interface TimelineItemProps {
  logo?: string; // URL
  title: string;
  company: string;
  duration: string;
  description: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  logo,
  title,
  company,
  duration,
  description,
  isLast = false
}) => {
  return (
    <View style={styles.container}>
      {/* Connector Line */}
      {!isLast && <View style={styles.connector} />}

      {/* Logo Node */}
      <View style={styles.logoContainer}>
        {logo ? (
          <Image source={{ uri: logo }} style={styles.logo} resizeMode="contain" />
        ) : (
          <View style={styles.placeholderLogo} />
        )}
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Typography variant="titleMedium" style={styles.title}>{title}</Typography>
        <View style={styles.metaContainer}>
          <Typography variant="bodyMedium" style={styles.company}>{company}</Typography>
          <Typography variant="labelSmall" style={styles.duration}>{duration}</Typography>
        </View>
        <Typography variant="bodyMedium" style={styles.description}>
          {description}
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: THEME.spacing.s40, // Reduced from design which seems large
    position: 'relative',
  },
  connector: {
    position: 'absolute',
    top: 56, // below logo
    left: 27, // center of 56px logo (approx) -> 28 - 1.5 = 26.5
    width: 3,
    bottom: -40, // extend to next item
    backgroundColor: THEME.colors.greenTimeline,
    zIndex: 0,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: THEME.colors.white,
    borderWidth: 3,
    borderColor: THEME.colors.greenTimeline,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  placeholderLogo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  content: {
    flex: 1,
    marginLeft: THEME.spacing.s20,
    paddingTop: 4,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 2,
    color: THEME.colors.white,
  },
  metaContainer: {
    marginBottom: 8,
  },
  company: {
    color: THEME.colors.greenLight,
    fontWeight: '500',
    marginBottom: 2,
  },
  duration: {
    color: THEME.colors.textSecondary,
    opacity: 0.8,
  },
  description: {
    lineHeight: 22,
    color: THEME.colors.textSecondary,
  },
});

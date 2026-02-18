import React from 'react';
import { View, ViewStyle, Image, ImageStyle } from 'react-native';
import { THEME } from '../theme/theme';
import { Typography } from './Typography';

interface TimelineItemProps {
  company: string;
  role: string;
  date: string;
  description: string;
  logoUrl: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  role,
  date,
  description,
  logoUrl,
  isLast = false,
}) => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 24, position: 'relative' }}>
      {/* Connector Line */}
      {!isLast && (
        <View
          style={{
            position: 'absolute',
            left: 28, // Center of the circle (56/2)
            top: 56,
            bottom: -24, // Connect to next item
            width: 2,
            backgroundColor: THEME.colors.greenTimeline,
            zIndex: 0,
          }}
        />
      )}

      {/* Logo Circle */}
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: 'white',
          borderWidth: 3,
          borderColor: THEME.colors.greenTimeline,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <Image
          source={{ uri: logoUrl }}
          style={{ width: '100%', height: '100%' } as ImageStyle}
          resizeMode="cover"
        />
      </View>

      {/* Content */}
      <View style={{ flex: 1, marginLeft: 20, paddingTop: 4 }}>
        <Typography variant="titleMedium" style={{ fontWeight: '700', color: 'white' }}>
          {role}
        </Typography>
        <View style={{ marginTop: 2, marginBottom: 8 }}>
          <Typography variant="labelLarge" style={{ color: THEME.colors.greenMaterial }}>
            {company}
          </Typography>
          <Typography variant="labelSmall" style={{ opacity: 0.8, marginTop: 2 }}>
            {date}
          </Typography>
        </View>
        <Typography variant="bodyMedium" style={{ lineHeight: 22 }}>
          {description}
        </Typography>
      </View>
    </View>
  );
};

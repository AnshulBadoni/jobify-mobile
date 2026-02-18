import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { THEME } from '../../src/theme/theme';
import { Typography } from '../../src/components/Typography';
import { Button } from '../../src/components/Button';
import { Icon } from '../../src/components/Icon';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Header } from '../../src/components/Header';
import { Card } from '../../src/components/Card';

export default function ReviewApplicationScreen() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(true);
  const [sponsorship, setSponsorship] = useState<boolean | null>(false);

  return (
    <ScreenContainer>
      <Header title="Review Application" showBack />

      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 120 }}>

        {/* Progress Bar */}
        <View style={styles.progressBar}>
          <View style={[styles.progressSegment, { backgroundColor: THEME.colors.greenMaterial }]} />
          <View style={[styles.progressSegment, { backgroundColor: THEME.colors.greenMaterial }]} />
          <View style={[styles.progressSegment, { backgroundColor: THEME.colors.greenMaterial }]} />
        </View>

        {/* Applicant Details */}
        <View style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>APPLICANT DETAILS</Typography>
          <Card>
            <View style={styles.applicantHeader}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                  style={styles.avatar}
                />
              </View>
              <View>
                <Typography variant="titleLarge">Anshul Badoni</Typography>
                <Typography variant="bodyMedium">Software Engineer</Typography>
              </View>
            </View>

            <View style={styles.resumeBox}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.iconBox}>
                  <Icon name="description" size={24} color={THEME.colors.greenMaterial} />
                </View>
                <View>
                  <Typography variant="labelLarge">resume_ansh.pdf</Typography>
                  <Typography variant="labelSmall" style={{ marginTop: 2 }}>Uploaded 2m ago</Typography>
                </View>
              </View>
              <Icon name="check-circle" size={24} color={THEME.colors.textSecondary} />
            </View>
          </Card>
        </View>

        {/* Quick Answers */}
        <View style={styles.section}>
          <Typography variant="labelSmall" style={styles.sectionTitle}>QUICK ANSWERS</Typography>

          <Card style={{ marginBottom: 16 }}>
            <Typography variant="titleMedium" style={{ marginBottom: 16 }}>Are you authorized to work in the US?</Typography>
            <View style={styles.toggleRow}>
              <ToggleOption label="Yes" active={authorized === true} onPress={() => setAuthorized(true)} />
              <ToggleOption label="No" active={authorized === false} onPress={() => setAuthorized(false)} />
            </View>
          </Card>

          <Card style={{ marginBottom: 16 }}>
            <Typography variant="titleMedium" style={{ marginBottom: 16 }}>Will you now or in the future require sponsorship?</Typography>
            <View style={styles.toggleRow}>
              <ToggleOption label="Yes" active={sponsorship === true} onPress={() => setSponsorship(true)} />
              <ToggleOption label="No" active={sponsorship === false} onPress={() => setSponsorship(false)} />
            </View>
          </Card>

          <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="titleMedium">Remote work preferred?</Typography>
              <View style={styles.switchTrack}>
                <View style={styles.switchThumb} />
              </View>
            </View>
          </Card>
        </View>

        <Typography variant="bodyMedium" style={{ textAlign: 'center', marginTop: 16, paddingHorizontal: 16 }}>
          By clicking submit, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy.
        </Typography>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Button
          title="Submit Application"
          fullWidth
          style={{ backgroundColor: THEME.colors.greenMaterial }}
          textStyle={{ color: THEME.colors.textOnGreen }}
          onPress={() => {}}
        />
        <View style={styles.homeIndicator} />
      </View>
    </ScreenContainer>
  );
}

const ToggleOption = ({ label, active, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[
      styles.toggleBtn,
      active ? { backgroundColor: THEME.colors.greenMaterial } : { backgroundColor: THEME.colors.tonalSurface }
    ]}
  >
    <Typography
      variant="labelLarge"
      style={{ color: active ? THEME.colors.textOnGreen : THEME.colors.textSecondary, fontWeight: 'bold' }}
    >
      {label}
    </Typography>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 32,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.colors.greenMaterial,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingLeft: 4,
    letterSpacing: 1,
  },
  applicantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: THEME.colors.divider,
    marginRight: 16,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  resumeBox: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: THEME.colors.tonalSurface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 12,
  },
  toggleBtn: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  switchTrack: {
    width: 48,
    height: 24,
    backgroundColor: THEME.colors.greenMaterial,
    borderRadius: 12,
    position: 'relative',
  },
  switchThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#00390a',
    position: 'absolute',
    right: 4,
    top: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40, // for home indicator
    borderTopWidth: 1,
    borderTopColor: THEME.colors.divider,
    backdropFilter: 'blur(20px)', // doesn't work in RN but fine as property
  },
  homeIndicator: {
    width: 128,
    height: 4,
    backgroundColor: THEME.colors.divider,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 24,
  },
});

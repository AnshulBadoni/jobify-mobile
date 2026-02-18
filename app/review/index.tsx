import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ScreenContainer } from '../../src/components/ScreenContainer';
import { Header } from '../../src/components/Header';
import { Typography } from '../../src/components/Typography';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { Icon } from '../../src/components/Icon';
import { THEME } from '../../src/theme/theme';
import Animated, { FadeInDown, Layout } from 'react-native-reanimated';

const PillSwitch = ({
  options,
  value,
  onChange
}: {
  options: [string, string],
  value: string,
  onChange: (val: string) => void
}) => {
  return (
    <View style={styles.pillContainer}>
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <TouchableOpacity
            key={opt}
            onPress={() => onChange(opt)}
            style={[
              styles.pillButton,
              isActive ? styles.pillActive : styles.pillInactive
            ]}
          >
            <Typography
              variant="labelLarge"
              style={{
                color: isActive ? '#00390a' : THEME.colors.textSecondary,
                fontWeight: 'bold'
              }}
            >
              {opt}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ToggleSwitch = ({ value, onChange }: { value: boolean, onChange: (val: boolean) => void }) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(!value)}
      style={[
        styles.toggleContainer,
        { backgroundColor: value ? THEME.colors.greenLight : THEME.colors.gray600 }
      ]}
    >
      <View style={[
        styles.toggleThumb,
        {
          backgroundColor: value ? '#00390a' : THEME.colors.textSecondary,
          alignSelf: value ? 'flex-end' : 'flex-start'
        }
      ]} />
    </TouchableOpacity>
  );
};

export default function ReviewApplicationScreen() {
  const [authorized, setAuthorized] = useState('Yes');
  const [sponsorship, setSponsorship] = useState('No');
  const [remote, setRemote] = useState(true);

  return (
    <ScreenContainer>
      <Header title="Review Application" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          {[1, 2, 3].map((step) => (
            <View key={step} style={styles.progressStep} />
          ))}
        </View>

        <Animated.View entering={FadeInDown.delay(100).springify()}>
          {/* Applicant Details */}
          <Typography variant="labelSmall" style={styles.sectionTitle}>
            Applicant Details
          </Typography>

          <Card variant="charcoal" style={styles.card}>
            <View style={styles.profileRow}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNO3m0uuMzGzy2ZMEduDXqKTwJ-pBMuDbV4FqHzLZN-f5NGUrjRVaaDxHVyoVgR3fQZa9QZO9eXMmFIj8aXMhza_dLv2YS3ntHKf3-ZhQTHbDJE7KIDJT_TALzHASTtOcBV-3J2YRET4HUuNksk2A0OjytIBUCuIOfsnlKjAvkEdiD4-805qllJUDIz2sfJyNnTfQ78scQR9Rflcg_XqMh1uO7yESeLKHdLuYvPt_XAPs3WhxBwfG81Z2nDNoNU2TOYqwRemYStTU_' }}
                  style={styles.avatar}
                />
              </View>
              <View>
                <Typography variant="titleLarge" style={styles.name}>Anshul Badoni</Typography>
                <Typography variant="bodyMedium">Software Engineer</Typography>
              </View>
            </View>

            <View style={styles.fileRow}>
              <View style={styles.fileInfo}>
                <View style={styles.fileIcon}>
                  <Icon name="description" color={THEME.colors.greenLight} />
                </View>
                <View>
                  <Typography variant="labelLarge">resume_ansh.pdf</Typography>
                  <Typography variant="labelSmall" style={{ textTransform: 'none' }}>Uploaded 2m ago</Typography>
                </View>
              </View>
              <Icon name="check-circle" color={THEME.colors.textSecondary} />
            </View>
          </Card>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          {/* Quick Answers */}
          <Typography variant="labelSmall" style={styles.sectionTitle}>
            Quick Answers
          </Typography>

          <View style={styles.questionsContainer}>
            <Card variant="charcoal" style={styles.card}>
              <Typography variant="bodyLarge" style={styles.questionText}>
                Are you authorized to work in the US?
              </Typography>
              <PillSwitch
                options={['Yes', 'No']}
                value={authorized}
                onChange={setAuthorized}
              />
            </Card>

            <Card variant="charcoal" style={styles.card}>
              <Typography variant="bodyLarge" style={styles.questionText}>
                Will you now or in the future require sponsorship?
              </Typography>
              <PillSwitch
                options={['Yes', 'No']}
                value={sponsorship}
                onChange={setSponsorship}
              />
            </Card>

            <Card variant="charcoal" style={styles.card}>
              <View style={styles.toggleRow}>
                <Typography variant="bodyLarge" style={styles.questionText}>
                  Remote work preferred?
                </Typography>
                <ToggleSwitch value={remote} onChange={setRemote} />
              </View>
            </Card>
          </View>
        </Animated.View>

        <Typography variant="bodyMedium" style={styles.termsText} align="center">
          By clicking submit, you agree to our Terms of Service and acknowledge that you have read our Privacy Policy.
        </Typography>
      </ScrollView>

      {/* Bottom Action */}
      <View style={styles.bottomBar}>
        <Button
          title="Submit Application"
          onPress={() => {}}
          fullWidth
        />
        <View style={styles.homeIndicator} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: THEME.spacing.s24,
    paddingBottom: 120,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: THEME.spacing.s32,
  },
  progressStep: {
    flex: 1,
    height: 4,
    backgroundColor: THEME.colors.greenLight,
    borderRadius: THEME.radius.full,
  },
  sectionTitle: {
    marginBottom: THEME.spacing.s16,
    paddingHorizontal: 4,
  },
  card: {
    marginBottom: THEME.spacing.s16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: THEME.spacing.s24,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: THEME.colors.divider,
    marginRight: THEME.spacing.s16,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    marginBottom: 4,
  },
  fileRow: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: THEME.radius.r12,
    padding: THEME.spacing.s16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  questionsContainer: {
    gap: THEME.spacing.s16,
  },
  questionText: {
    marginBottom: THEME.spacing.s16,
    fontWeight: '500',
  },
  pillContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  pillButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: THEME.radius.full,
  },
  pillActive: {
    backgroundColor: THEME.colors.greenLight,
  },
  pillInactive: {
    backgroundColor: THEME.colors.surface,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleContainer: {
    width: 48,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    padding: 2,
  },
  toggleThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 2,
  },
  termsText: {
    marginTop: THEME.spacing.s16,
    marginBottom: THEME.spacing.s32,
    fontSize: 12,
    paddingHorizontal: THEME.spacing.s16,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: THEME.spacing.s24,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderTopWidth: 1,
    borderTopColor: THEME.colors.divider,
    paddingBottom: 40,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: THEME.colors.divider,
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: 24,
  },
});

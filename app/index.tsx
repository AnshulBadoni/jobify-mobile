import React, { useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  withSpring,
  Easing
} from 'react-native-reanimated';
import { THEME } from '../src/theme/theme';
import { Typography } from '../src/components/Typography';
import { Button } from '../src/components/Button';
import { Icon } from '../src/components/Icon';
import { ScreenContainer } from '../src/components/ScreenContainer';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();

  // Animation values
  const card1Scale = useSharedValue(0.8);
  const card1TranslateY = useSharedValue(-20);
  const card1Opacity = useSharedValue(0);

  const card2Scale = useSharedValue(0.9);
  const card2TranslateY = useSharedValue(-10);
  const card2Opacity = useSharedValue(0);

  const card3TranslateY = useSharedValue(50);
  const card3Opacity = useSharedValue(0);

  const formOpacity = useSharedValue(0);
  const formTranslateY = useSharedValue(20);

  useEffect(() => {
    // Sequence animations
    card1Opacity.value = withDelay(100, withTiming(0.2, { duration: 500 }));
    card1Scale.value = withDelay(100, withSpring(0.9));
    card1TranslateY.value = withDelay(100, withSpring(-40));

    card2Opacity.value = withDelay(300, withTiming(0.4, { duration: 500 }));
    card2Scale.value = withDelay(300, withSpring(0.95));
    card2TranslateY.value = withDelay(300, withSpring(-20));

    card3Opacity.value = withDelay(500, withTiming(1, { duration: 500 }));
    card3TranslateY.value = withDelay(500, withSpring(0));

    formOpacity.value = withDelay(800, withTiming(1, { duration: 500 }));
    formTranslateY.value = withDelay(800, withSpring(0));
  }, []);

  const card1Style = useAnimatedStyle(() => ({
    transform: [{ scale: card1Scale.value }, { translateY: card1TranslateY.value }, { translateX: 20 }],
    opacity: card1Opacity.value,
  }));

  const card2Style = useAnimatedStyle(() => ({
    transform: [{ scale: card2Scale.value }, { translateY: card2TranslateY.value }, { translateX: 10 }],
    opacity: card2Opacity.value,
  }));

  const card3Style = useAnimatedStyle(() => ({
    transform: [{ translateY: card3TranslateY.value }],
    opacity: card3Opacity.value,
  }));

  const formStyle = useAnimatedStyle(() => ({
    opacity: formOpacity.value,
    transform: [{ translateY: formTranslateY.value }],
  }));

  const handleSignIn = () => {
    router.replace('/(tabs)');
  };

  const handleRecruiterSignIn = () => {
    router.push('/review');
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Typography variant="labelSmall" style={{ fontWeight: 'bold' }}>9:41</Typography>
        <View style={styles.statusIcons}>
          <Icon name="signal-cellular-alt" size={16} />
          <Icon name="wifi" size={16} />
          <Icon name="battery-full" size={16} />
        </View>
      </View>

      <View style={styles.carouselContainer}>
        {/* Background Cards */}
        <Animated.View style={[styles.card, styles.cardPink, card1Style]}>
          <Typography variant="titleLarge" style={{ color: THEME.colors.textOnPink }}>
            Connect with top recruiters
          </Typography>
        </Animated.View>

        <Animated.View style={[styles.card, styles.cardBlue, card2Style]}>
          <Typography variant="titleLarge" style={{ color: THEME.colors.textOnBlue }}>
            Discover hidden job gems
          </Typography>
        </Animated.View>

        {/* Main Card */}
        <Animated.View style={[styles.card, styles.cardYellow, card3Style]}>
          <View style={{ marginBottom: 16 }}>
             <Icon name="waving-hand" size={32} color={THEME.colors.textOnYellow} />
          </View>
          <Typography variant="displayLarge" style={{ color: THEME.colors.textOnYellow }}>
            Welcome back
          </Typography>
          <Typography variant="bodyLarge" style={{ color: THEME.colors.textOnYellow, opacity: 0.8, marginTop: 8 }}>
            We're glad to see you again. Enter your details below.
          </Typography>
        </Animated.View>
      </View>

      {/* Indicators */}
      <View style={styles.indicators}>
        <View style={[styles.indicator, { width: 24, backgroundColor: THEME.colors.yellowSunflower }]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>

      <Animated.View style={[styles.formContainer, formStyle]}>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Icon name="mail" color={THEME.colors.textSecondary} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={THEME.colors.textSecondary}
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Icon name="lock" color={THEME.colors.textSecondary} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={THEME.colors.textSecondary}
              secureTextEntry
            />
            <TouchableOpacity style={styles.visibilityBtn}>
              <Icon name="visibility-off" color={THEME.colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end', marginBottom: 32 }}>
          <TouchableOpacity>
             <Typography variant="labelLarge" style={{ color: THEME.colors.blueTonalText }}>
               Forgot password?
             </Typography>
          </TouchableOpacity>
        </View>

        <Button
          title="Sign In"
          onPress={handleSignIn}
          variant="tonalGreen"
          fullWidth
          style={{ backgroundColor: THEME.colors.greenRefined, marginBottom: 24 }}
          textStyle={{ color: THEME.colors.deepBlack }}
        />

        <View style={styles.dividerContainer}>
           <View style={styles.divider} />
           <Typography variant="bodyMedium" style={{ marginHorizontal: 16 }}>or</Typography>
           <View style={styles.divider} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialBtn}>
             <Icon name="g-translate" size={24} color={THEME.colors.bluePrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
             <Icon name="apple" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Typography variant="bodyMedium">Don't have an account? </Typography>
          <TouchableOpacity onPress={() => {}}>
            <Typography variant="labelLarge" style={{ color: THEME.colors.greenRefined }}>Sign up</Typography>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleRecruiterSignIn} style={{ marginTop: 20, alignSelf: 'center' }}>
            <Typography variant="labelSmall" style={{ color: THEME.colors.textSecondary, textDecorationLine: 'underline' }}>
                Login as Recruiter
            </Typography>
        </TouchableOpacity>

      </Animated.View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 6,
  },
  carouselContainer: {
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    position: 'relative',
  },
  card: {
    width: width - 48,
    height: 230,
    borderRadius: 24,
    padding: 32,
    position: 'absolute',
    justifyContent: 'center',
  },
  cardPink: {
    backgroundColor: THEME.colors.pinkLight,
    zIndex: 1,
    height: 180,
    justifyContent: 'flex-end',
  },
  cardBlue: {
    backgroundColor: THEME.colors.bluePrimary,
    zIndex: 2,
    height: 200,
    justifyContent: 'flex-end',
  },
  cardYellow: {
    backgroundColor: THEME.colors.yellowSunflower,
    zIndex: 3,
  },
  indicators: {
    flexDirection: 'row',
    gap: 6,
    marginLeft: 32,
    marginTop: 24,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: THEME.colors.outlineVariant,
  },
  formContainer: {
    paddingHorizontal: 24,
    marginTop: 40,
    flex: 1,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.colors.surfaceContainer,
    borderRadius: 12,
    height: 64,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: THEME.colors.textPrimary,
    fontSize: 16,
    fontFamily: THEME.typography.fontFamily,
  },
  visibilityBtn: {
    padding: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: THEME.colors.divider,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  socialBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: THEME.colors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
});

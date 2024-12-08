import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground 
} from 'react-native';
import * as CONST from '../Utils/Constants';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { MainStackParamList } from '../navigation/MainStackScreen';

type Props = {
  navigation: StackNavigationProp<MainStackParamList, 'Splash'>;
};

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={CONST.LOGIN_SCREEN_BACKGROUND_IMAGE}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to App</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Optional: adds a semi-transparent overlay
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Changed to white to be more visible on background image
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default SplashScreen;
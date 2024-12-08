import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackScreen from './MainStackScreen';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  Main: undefined;
  // Add other screen types here
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
  useEffect(() => {
    // Hide splash screen after a short delay to ensure initial render is complete
    const splashTimeout = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    // Clean up the timeout to prevent memory leaks
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []); // Empty dependency array ensures this runs only once on mount
  
  return (
    <RootStack.Navigator 
      screenOptions={{ 
        headerShown: false,
        presentation: 'card'
      }}
    >
      <RootStack.Screen 
        name="Main" 
        component={MainStackScreen} 
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
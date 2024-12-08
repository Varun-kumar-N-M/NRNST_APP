import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

export type MainStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
      initialRouteName="Login"
    >
      {/* <MainStack.Screen name="Splash" component={SplashScreen} /> */}
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Register" component={RegisterScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
import 'react-native-gesture-handler';  // Must be at the very top
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStackScreen from './narrativeApp/navigation/RootStackScreen';
import { enableScreens } from 'react-native-screens';

// Enable screens for better performance
enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <RootStackScreen />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
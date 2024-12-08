import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import * as CONST from '../Utils/Constants';
const Header = ({ 
  title, 
  leftIcon, 
  rightIcon, 
  onLeftPress, 
  onRightPress 
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Left Icon */}
        {leftIcon && (
          <TouchableOpacity 
            style={styles.leftIconContainer} 
            onPress={onLeftPress}
          >
            {typeof leftIcon === 'number' ? (
              <Image source={leftIcon} style={styles.icon} />
            ) : (
              leftIcon
            )}
          </TouchableOpacity>
        )}

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        {/* Right Icon */}
        {rightIcon && (
          <TouchableOpacity 
            style={styles.rightIconContainer} 
            onPress={onRightPress}
          >
            {typeof rightIcon === 'number' ? (
              <Image source={rightIcon} style={styles.icon} />
            ) : (
              rightIcon
            )}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#191a25',
    // borderBottomColor:'white',
    // borderBottomWidth:2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 56,
    position: 'relative',
  },
  leftIconContainer: {
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color:'white',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import * as CONST from '../Utils/Constants';

const { width } = Dimensions.get('window');

const ProfileDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        
        <View style={styles.profileHeader}>
          <View style={styles.profileIcon} />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>johndoe@example.com</Text>
        </View>
        
        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 100,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: width /1.4,
    backgroundColor: CONST.SCREEN_BACKGROUND_COLOUR,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    marginBottom: 10,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: 'gray',
    fontSize: 14,
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuItemText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileDrawer;
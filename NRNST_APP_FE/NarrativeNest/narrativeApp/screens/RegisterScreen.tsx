import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import * as CONST from '../Utils/Constants';
import Header from '../Components/Header';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleProfileImageSelection = () => {
    // TODO: Implement image selection logic
    console.log('Profile image selection clicked');
  };

  const validateForm = () => {
    // const newErrors = {};

    // if (!name.trim()) {
    //   newErrors.name = 'Name is required';
    // }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!emailRegex.test(email)) {
    //   newErrors.email = 'Invalid email format';
    // }

    // if (!password.trim()) {
    //   newErrors.password = 'Password is required';
    // } else if (password.length < 6) {
    //   newErrors.password = 'Password must be at least 6 characters';
    // }

    // if (!confirmPassword.trim()) {
    //   newErrors.confirmPassword = 'Confirm password is required';
    // } else if (password !== confirmPassword) {
    //   newErrors.confirmPassword = 'Passwords do not match';
    // }

    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    // if (validateForm()) {
      // If validation passes, navigate to Home
      navigation.navigate('Home');
    // }
  };

  return (
    <View style={styles.container}>
      <Header title="Register" />
      
      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Profile Picture Section */}
          <View style={styles.profilePictureContainer}>
            <TouchableOpacity 
              style={styles.profilePictureWrapper}
              onPress={handleProfileImageSelection}
            >
              {profileImage ? (
                <Image 
                  source={{ uri: profileImage }} 
                  style={styles.profileImage} 
                />
              ) : (
                <View style={styles.profilePlaceholder}>
                  <Text style={styles.profilePlaceholderIcon}>👤</Text>
                  <Text style={styles.addPhotoText}>Add Profile</Text>
                </View>
              )}
              <View style={styles.cameraIconContainer}>
                <Text style={styles.cameraIconText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Form Inputs */}
          <View style={styles.inputContainer}>
            {/* Name Input */}
            <TextInput
              style={[
                styles.input, 
                errors.name && styles.inputError
              ]}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />
            {errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            {/* Email Input */}
            <TextInput
              style={[
                styles.input, 
                errors.email && styles.inputError
              ]}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            {/* Password Input */}
            <TextInput
              style={[
                styles.input, 
                errors.password && styles.inputError
              ]}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Confirm Password Input */}
            <TextInput
              style={[
                styles.input, 
                errors.confirmPassword && styles.inputError
              ]}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </View>

         

          {/* Register Button */}
          <TouchableOpacity 
            style={styles.registerButton} 
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
           {/* Login Link */}
           <View style={styles.loginLinkContainer}>
            <Text style={styles.loginText}>
              Already have an account? 
            </Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginLinkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST.SCREEN_BACKGROUND_COLOUR,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#7d8cad',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: 'white',
  },
  loginLinkText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  profilePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePlaceholderIcon: {
    fontSize: 50,
    color: '#888',
  },
  addPhotoText: {
    marginTop: 10,
    color: 'black',
    fontSize: 8,
    marginRight:8,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007AFF',
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  cameraIconText: {
    color: 'white',
    fontSize: 15,
    marginBottom:3,
  },
});

export default RegistrationScreen;
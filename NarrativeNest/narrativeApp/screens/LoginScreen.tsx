import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import * as CONST from '../Utils/Constants';
import Header from '../Components/Header';

const LoginScreen = ({navigation}) => {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    // const newErrors = {};

    // // Validate login identifier (email or mobile number)
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const mobileRegex = /^[0-9]{10}$/; // Assumes 10-digit mobile number

    // if (!loginIdentifier.trim()) {
    //   newErrors.loginIdentifier = 'Email or Mobile Number is required';
    // } else if (!emailRegex.test(loginIdentifier) && !mobileRegex.test(loginIdentifier)) {
    //   newErrors.loginIdentifier = 'Enter a valid Email or 10-digit Mobile Number';
    // }

    // // Validate password
    // if (!password.trim()) {
    //   newErrors.password = 'Password is required';
    // } else if (password.length < 6) {
    //   newErrors.password = 'Password must be at least 6 characters';
    // }

    // setErrors(newErrors);
    // return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    // if (validateForm()) {
      // TODO: Implement login logic
      navigation.navigate('Home');
    // }
  };

  return (
    <View style={styles.container}>
      <Header title="Login" />
   
        <KeyboardAvoidingView 
          style={styles.keyboardContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView 
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
          >
            {/* Login Identifier Input (Email or Mobile) */}
            <TextInput
              style={[
                styles.input, 
                errors.loginIdentifier && styles.inputError
              ]}
              placeholder="Email or Mobile Number"
              keyboardType="email-address"
              autoCapitalize="none"
              value={loginIdentifier}
              onChangeText={setLoginIdentifier}
            />
            {errors.loginIdentifier && (
              <Text style={styles.errorText}>{errors.loginIdentifier}</Text>
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

            {/* Forgot Password Link */}
            <TouchableOpacity 
              style={styles.forgotPasswordContainer}
              onPress={() => {/* TODO: Implement forgot password navigation */}}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            {/* Registration Link */}
            <View style={styles.registrationLinkContainer}>
              <Text style={styles.registrationText}>
                Don't have an account? 
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={styles.registrationLinkText}>Register</Text>
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  keyboardContainer: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  registrationLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registrationText: {
    fontSize: 14,
    color: 'white',
  },
  registrationLinkText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
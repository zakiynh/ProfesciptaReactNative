import {
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { login } from '../stores/actions/userActions'; // Adjust the path accordingly
  import { FontAwesome5 } from '@expo/vector-icons';
  import { LinearGradient } from 'expo-linear-gradient';
  import { useNavigation } from '@react-navigation/native';
  import { loginStyles } from '../styles/loginStyle';
  
  export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleLogin = () => {
      try {
        dispatch(
          login({
            username: username,
            password: password,
            grant_type: 'client_credentials',
            client_id: 'profes-api',
            client_secret: 'P@ssward',
          })
        );
        navigation.navigate('Order List');
      } catch (error) {
        console.log(error, 'error');
      }
    };
  
    return (
      <LinearGradient
        start={{ x: 0, y: 0.7 }}
        colors={['#3c8ce7', '#fff']}
        style={loginStyles.linearGradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <View style={loginStyles.container}>
            <Text style={loginStyles.title}>Login</Text>
            <View style={loginStyles.content}>
              <FontAwesome5 name="user-alt" size={24} color="black" />
              <TextInput
                style={loginStyles.input}
                onChangeText={(e) => setUsername(e)}
                placeholder="Username"
              />
            </View>
            <View style={loginStyles.content}>
              <FontAwesome5 name="unlock-alt" size={24} color="black" />
              <TextInput
                style={loginStyles.input}
                onChangeText={(e) => setPassword(e)}
                placeholder="Password"
              />
            </View>
            <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
              <Text style={{ fontSize: 10, fontWeight: '700', color: 'white' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
  
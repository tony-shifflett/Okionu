import React from 'react';
import { View } from 'react-native';
import LogoHeader from './components/headers/LogoHeader';
import LoginForm from './components/forms/LoginForm';
const App = () => {
  return (
    <View>
      <LogoHeader/>
      <LoginForm/>
    </View>
  )
}

export default App
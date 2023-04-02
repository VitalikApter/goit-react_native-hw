import { StatusBar } from 'expo-status-bar';
import {Text, View,} from 'react-native';

import LoginScreen from './Screens/LoginScreen';
import  RegistrationScreen  from "./Screens/RegistrationScreen";

import styles from './Screens/AuthStyles';

export default function App() {
  return (
    <View style={styles.container}>

      <LoginScreen/>
      
        <RegistrationScreen />
        
      
      
      <StatusBar style="auto" />
    </View>
  );
}



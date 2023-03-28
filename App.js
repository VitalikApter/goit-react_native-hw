import { StatusBar } from 'expo-status-bar';
import {Text, View,} from 'react-native';
import { RegistrationScreen } from "./Screens/RegistrationScreen";

import styles from './Screens/AuthStyles';

export default function App() {
  return (
    <View style={styles.container}>
      
        <RegistrationScreen />
        
      
      
      <StatusBar style="auto" />
    </View>
  );
}



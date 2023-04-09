import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";

const AuthStack = createNativeStackNavigator();

const MainTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainTab.Navigator>

      </MainTab.Navigator>
    </NavigationContainer>
  );
}




//Auth
{/* <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
      </AuthStack.Navigator> */}
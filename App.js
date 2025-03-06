import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './Screens/GameScreen';
import HomeScreen from './Screens/HomeScreen';
import styles from './style/style';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Heroes vs Villains' }}
        />
        <Stack.Screen name="Game Screen"
          component={GameScreen}
          options={{ title: 'Back to title screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


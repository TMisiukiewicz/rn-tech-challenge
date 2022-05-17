import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignInOptionsScreen from '../../screens/SignInOptionsScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpWithEmailScreen from '../../screens/SignUpWithEmailScreen';
import { RootNavigationScreens } from './types';

const Stack = createNativeStackNavigator<RootNavigationScreens>();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Sign In Options' component={SignInOptionsScreen} />
      <Stack.Screen
        name='Sign Up With Email'
        component={SignUpWithEmailScreen}
      />
      <Stack.Screen name='Sign In' component={SignInScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;

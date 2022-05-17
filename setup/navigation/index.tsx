import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInOptionsScreen from '../../screens/SignInOptionsScreen';
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
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;

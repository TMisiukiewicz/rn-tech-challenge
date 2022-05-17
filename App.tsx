import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import {
  proximaNovaBold,
  proximaNovaRegular,
  proximaNovaSemibold,
  proximaNovaCondSemibold,
} from './assets/fonts';
import Container from './components/wrappers/Container';
import RootNavigator from './setup/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    ProximaNovaBold: proximaNovaBold,
    ProximaNovaRegular: proximaNovaRegular,
    ProximaNovaSemibold: proximaNovaSemibold,
    ProximaNovaCondSemibold: proximaNovaCondSemibold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Container>
        <RootNavigator />
      </Container>
    </SafeAreaProvider>
  );
}

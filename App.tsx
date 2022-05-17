import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from './components/wrappers/Container';
import RootNavigator from './setup/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Container>
        <RootNavigator />
      </Container>
    </SafeAreaProvider>
  );
}

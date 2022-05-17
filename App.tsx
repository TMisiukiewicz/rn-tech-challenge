import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useFonts } from 'expo-font';
import {
  proximaNovaBold,
  proximaNovaRegular,
  proximaNovaSemibold,
  proximaNovaCondSemibold,
} from './assets/fonts';
import Container from './components/wrappers/Container';
import RootNavigator from './setup/navigation';

const apolloClient = new ApolloClient({
  uri: 'https://api-dev.foodstyles.com/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    ProximaNovaBold: proximaNovaBold,
    ProximaNovaRegular: proximaNovaRegular,
    ProximaNovaSemibold: proximaNovaSemibold,
    ProximaNovaCondSemibold: proximaNovaCondSemibold,
  });

  if (!fontsLoaded) return null;

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaProvider>
        <Container>
          <RootNavigator />
        </Container>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

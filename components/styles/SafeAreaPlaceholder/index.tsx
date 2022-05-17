import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledSafeAreaPlaceholder } from './styles';

const SafeAreaPlaceholder = () => {
  const { top } = useSafeAreaInsets();

  return <StyledSafeAreaPlaceholder {...{ top }} />;
};

export default SafeAreaPlaceholder;

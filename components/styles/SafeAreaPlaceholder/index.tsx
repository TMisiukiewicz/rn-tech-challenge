import { EdgeInsets } from 'react-native-safe-area-context';
import { StyledSafeAreaPlaceholder } from './styles';

const SafeAreaPlaceholder = (props: Partial<EdgeInsets>) => (
  <StyledSafeAreaPlaceholder {...props} />
);

export default SafeAreaPlaceholder;

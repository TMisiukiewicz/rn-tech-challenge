import { ViewProps } from 'react-native';
import { StyledBoxProps } from '../../../../components/styles/Box/types';

export type StyledBetaVersionInfoProps = StyledBoxProps &
  Pick<ViewProps, 'style'>;

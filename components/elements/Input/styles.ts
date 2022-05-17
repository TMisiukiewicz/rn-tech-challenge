import styled, { css } from 'styled-components/native';
import { StyledText } from '../../styles/Typography/styles';
import { InputProps } from './types';

export const StyledInputLabel = styled(StyledText)`
  margin-bottom: 7px;
  ${({ isAlternative }) =>
    isAlternative &&
    css`
      color: rgb(67, 67, 67);
    `}
`;

export const StyledTextInput = styled.TextInput<
  Pick<InputProps, 'isAlternative'>
>`
  background-color: ${({ isAlternative }) =>
    isAlternative ? 'rgb(236,236,236)' : 'white'};
  border-color: ${({ isAlternative }) =>
    isAlternative ? 'transparent' : 'rgba(0, 0, 0, 0.35)'};
  border-width: ${({ isAlternative }) => (isAlternative ? '0' : '1')}px;
  border-radius: 4px;
  padding: 9px;
  font-family: ProximaNovaSemibold;
`;

export const StyledInputWrapper = styled.View`
  margin-bottom: 13px;
`;

export const StyledInputLabelWrapper = styled.View`
  flex-direction: row;
`;

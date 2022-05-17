import styled from 'styled-components/native';
import { StyledText } from '../../styles/Typography/styles';
import { StyledSubmitButtonProps } from './types';

export const StyledSubmitButton = styled.Pressable<StyledSubmitButtonProps>`
  border-radius: 50px;
  background-color: rgb(17, 206, 144);
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 40px;
  padding-right: 40px;
  align-self: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
`;

export const StyledSubmitButtonLabel = styled(StyledText)`
  text-transform: uppercase;
`;

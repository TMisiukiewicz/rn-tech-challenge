import styled from 'styled-components/native';
import { StyledText } from '../../styles/Typography/styles';
import { StyledLogoutButtonProps } from './types';

export const StyledLogoutButton = styled.Pressable<StyledLogoutButtonProps>`
  border-radius: 50px;
  border-color: rgb(217, 217, 217);
  border-width: 1px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 51px;
  padding-right: 51px;
  align-self: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
`;

export const StyledLogoutButtonLabel = styled(StyledText)`
  text-transform: uppercase;
  color: rgb(67, 67, 67);
  opacity: 0.8;
`;

import styled from 'styled-components/native';
import { StyledSafeAreaPlaceholderProps } from './types';

export const StyledSafeAreaPlaceholder = styled.View<StyledSafeAreaPlaceholderProps>`
  padding-top: ${({ top }) => top || 0}px;
  padding-bottom: ${({ bottom }) => bottom || 0}px;
  padding-left: ${({ left }) => left || 0}px;
  padding-right: ${({ right }) => right || 0}px;
`;

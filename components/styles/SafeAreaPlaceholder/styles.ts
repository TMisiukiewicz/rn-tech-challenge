import styled from 'styled-components/native';
import { StyledSafeAreaPlaceholderProps } from './types';

export const StyledSafeAreaPlaceholder = styled.View<StyledSafeAreaPlaceholderProps>`
  padding-top: ${({ top }) => top}px;
`;

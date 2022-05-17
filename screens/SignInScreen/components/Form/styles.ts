import styled from 'styled-components/native';
import { SubmitButtonWrapperProps } from './types';

export const SubmitButtonWrapper = styled.View<SubmitButtonWrapperProps>`
  margin-top: ${({ hasErrors }) => (hasErrors ? 0 : 10)}px;
  align-items: center;
`;

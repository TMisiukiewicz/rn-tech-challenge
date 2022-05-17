import React from 'react';
import { StyledSubmitButton, StyledSubmitButtonLabel } from './styles';
import { SubmitButtonProps } from './types';

const SubmitButton = ({ label, ...rest }: SubmitButtonProps) => (
  <StyledSubmitButton {...rest}>
    <StyledSubmitButtonLabel fontWeight='bold'>{label}</StyledSubmitButtonLabel>
  </StyledSubmitButton>
);

export default SubmitButton;

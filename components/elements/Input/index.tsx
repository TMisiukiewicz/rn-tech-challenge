import React from 'react';
import {
  StyledInputLabel,
  StyledTextInput,
  StyledInputWrapper,
  StyledInputLabelWrapper,
} from './styles';
import { InputProps } from './types';

const Input = ({ label, description, ...rest }: InputProps) => (
  <StyledInputWrapper>
    <StyledInputLabelWrapper>
      <StyledInputLabel fontWeight='semibold'>{label}</StyledInputLabel>
      {description && <StyledInputLabel> {description}</StyledInputLabel>}
    </StyledInputLabelWrapper>
    <StyledTextInput {...rest} />
  </StyledInputWrapper>
);

export default Input;

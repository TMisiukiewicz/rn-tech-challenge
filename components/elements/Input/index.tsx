import React from 'react';
import {
  StyledInputLabel,
  StyledTextInput,
  StyledInputWrapper,
  StyledInputLabelWrapper,
} from './styles';
import { InputProps } from './types';

const Input = ({ label, description, isAlternative, ...rest }: InputProps) => (
  <StyledInputWrapper>
    <StyledInputLabelWrapper>
      <StyledInputLabel
        {...{ isAlternative }}
        fontSize={isAlternative ? 14 : 16}
        fontWeight='semibold'
      >
        {label}
      </StyledInputLabel>
      {description && <StyledInputLabel> {description}</StyledInputLabel>}
    </StyledInputLabelWrapper>
    <StyledTextInput {...{ isAlternative }} {...rest} />
  </StyledInputWrapper>
);

export default Input;

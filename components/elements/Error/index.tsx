import React from 'react';
import { StyledErrorTitle, StyledErrorWrapper } from './styles';
import { ErrorProps } from './types';

const Error = ({ title }: ErrorProps) => (
  <StyledErrorWrapper>
    <StyledErrorTitle fontWeight='semibold'>{title}</StyledErrorTitle>
  </StyledErrorWrapper>
);

export default Error;

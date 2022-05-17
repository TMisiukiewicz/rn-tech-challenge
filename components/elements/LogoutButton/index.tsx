import React from 'react';
import { StyledLogoutButton, StyledLogoutButtonLabel } from './styles';
import { LogoutButtonProps } from './types';

const LogoutButton = ({ label, ...rest }: LogoutButtonProps) => (
  <StyledLogoutButton {...rest}>
    <StyledLogoutButtonLabel fontWeight='bold' fontSize={13}>
      {label}
    </StyledLogoutButtonLabel>
  </StyledLogoutButton>
);

export default LogoutButton;

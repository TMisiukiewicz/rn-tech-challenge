import React, { PropsWithChildren } from 'react';
import { StyledBox } from './styles';
import { StyledBoxProps } from './types';

const Box: React.FC<PropsWithChildren<StyledBoxProps>> = ({
  children,
  ...rest
}) => <StyledBox {...rest}>{children}</StyledBox>;

export default Box;

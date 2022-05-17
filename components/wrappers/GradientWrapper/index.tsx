import React, { PropsWithChildren } from 'react';
import { colors } from './consts';
import { StyledGradientWrapper } from './styles';

const GradientWrapper: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => (
  <StyledGradientWrapper
    {...{ colors }}
    start={{ x: 1, y: 0 }}
    end={{ x: 0, y: 1 }}
    locations={[0.01, 0.5]}
  >
    {children}
  </StyledGradientWrapper>
);

export default GradientWrapper;

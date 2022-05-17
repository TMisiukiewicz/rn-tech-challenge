import React from 'react';
import { StyledText } from '../../../../components/styles/Typography/styles';
import shadow from '../../../../utils/shadow';
import { StyledBetaVersionInfo } from './styles';

const BetaVersionInfo = () => (
  <StyledBetaVersionInfo style={shadow}>
    <StyledText fontWeight='bold'>BETA VERSION</StyledText>
  </StyledBetaVersionInfo>
);

export default BetaVersionInfo;

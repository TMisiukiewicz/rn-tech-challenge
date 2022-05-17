import React from 'react';
import { StyledText } from '../../../../components/styles/Typography/styles';
import { StyledBetaVersionInfo } from './styles';

const BetaVersionInfo = () => (
  <StyledBetaVersionInfo
    style={{
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.22,

      elevation: 3,
    }}
  >
    <StyledText fontWeight='bold'>BETA VERSION</StyledText>
  </StyledBetaVersionInfo>
);

export default BetaVersionInfo;

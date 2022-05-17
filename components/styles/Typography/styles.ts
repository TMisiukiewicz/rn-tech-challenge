import styled from 'styled-components/native';
import { StyledTextProps } from './types';

export const StyledText = styled.Text<StyledTextProps>`
  font-family: ${({ fontWeight }) => {
    if (fontWeight === 'bold') {
      return 'ProximaNovaBold';
    }
    if (fontWeight === 'condSemibold') {
      return 'ProximaNovaCondSemibold';
    }
    if (fontWeight === 'semibold') {
      return 'ProximaNovaSemibold';
    }

    return 'ProximaNovaRegular';
  }};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  color: ${({ color }) => color || 'white'};
`;

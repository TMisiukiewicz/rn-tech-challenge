import styled from 'styled-components/native';
import { StyledText } from '../../components/styles/Typography/styles';

export const StyledLogo = styled.Image`
  width: 140px;
  height: 120px;
`;

export const StyledSignInDescription = styled(StyledText)`
  text-align: center;
  line-height: 22px;
`;

export const StyledPolicyText = styled(StyledText)`
  text-align: center;
`;

export const StyledLink = styled(StyledText)`
  text-decoration: underline;
  text-decoration-color: white;
  font-size: 13px;
`;

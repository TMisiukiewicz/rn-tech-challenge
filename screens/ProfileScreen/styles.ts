import styled from 'styled-components/native';
import { StyledText } from '../../components/styles/Typography/styles';

export const ProfileScreenWrapper = styled.View`
  flex: 1;
  background-color: rgb(248, 248, 248);
  padding-left: 18px;
  padding-right: 18px;
`;

export const StyledPageTitle = styled(StyledText)`
  color: rgb(67, 67, 67);
  letter-spacing: 0.75px;
  opacity: 0.9;
`;

export const StyledLogOutButtonWrapper = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 56px;
  letter-spacing: 0.5px;
`;

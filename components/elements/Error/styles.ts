import styled from 'styled-components/native';
import { StyledText } from '../../styles/Typography/styles';

export const StyledErrorWrapper = styled.View`
  background-color: rgb(241, 56, 56);
  padding-left: 9px;
  padding-right: 9px;
  padding-top: 3.2px;
  padding-bottom: 6.2px;
  border-radius: 4px;
`;

export const StyledErrorTitle = styled(StyledText)`
  text-align: center;
`;

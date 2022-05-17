import styled from 'styled-components/native';
import { StyledText } from '../../../../components/styles/Typography/styles';

export const StyledSocialButtonWrapper = styled.Pressable`
  background-color: white;
  border-radius: 50px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const StyledSocialButtonTitle = styled(StyledText)`
  color: black;
  text-align: center;
`;

export const StyledSocialButtonIcon = styled.Image`
  width: 14px;
  height: 14px;
  margin-right: 8px;
`;

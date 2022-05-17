import styled from 'styled-components/native';
import { StyledText } from '../../styles/Typography/styles';

export const StyledInputLabel = styled(StyledText)`
  margin-bottom: 7px;
`;

export const StyledTextInput = styled.TextInput`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.35);
  border-width: 1px;
  border-radius: 4px;
  padding: 9px;
`;

export const StyledInputWrapper = styled.View`
  margin-bottom: 13px;
`;

export const StyledInputLabelWrapper = styled.View`
  flex-direction: row;
`;

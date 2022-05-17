import styled from 'styled-components/native';

export const StyledDefaultScreenHeaderWrapper = styled.View`
  background-color: transparent;
  padding-left: 6px;
  padding-right: 6px;
`;

export const StyledBackIconWrapper = styled.Pressable`
  background-color: white;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 6px;
  z-index: 10;
`;

export const StyledBackIcon = styled.Image`
height: 21px
width: 12px;
`;

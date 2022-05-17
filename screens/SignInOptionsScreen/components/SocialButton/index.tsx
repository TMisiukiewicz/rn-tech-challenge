import React from 'react';
import shadow from '../../../../utils/shadow';
import { useSocialButton } from './hooks';
import {
  StyledSocialButtonTitle,
  StyledSocialButtonWrapper,
  StyledSocialButtonIcon,
} from './styles';
import { SocialButtonProps } from './types';

const SocialButton = ({ type, onPress }: SocialButtonProps) => {
  const { title, icon } = useSocialButton(type);
  return (
    <StyledSocialButtonWrapper {...{ onPress }} style={shadow}>
      {icon && <StyledSocialButtonIcon source={icon} />}
      <StyledSocialButtonTitle fontWeight='semibold' fontSize={16}>
        {title}
      </StyledSocialButtonTitle>
    </StyledSocialButtonWrapper>
  );
};

export default SocialButton;

import React from 'react';
import { useSocialButton } from './hooks';
import {
  StyledSocialButtonTitle,
  StyledSocialButtonWrapper,
  StyledSocialButtonIcon,
} from './styles';
import { SocialButtonProps } from './types';

const SocialButton = ({ type }: SocialButtonProps) => {
  const { title, icon } = useSocialButton(type);
  return (
    <StyledSocialButtonWrapper
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
      {icon && <StyledSocialButtonIcon source={icon} />}
      <StyledSocialButtonTitle fontWeight='semibold' fontSize={16}>
        {title}
      </StyledSocialButtonTitle>
    </StyledSocialButtonWrapper>
  );
};

export default SocialButton;

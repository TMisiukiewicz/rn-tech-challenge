import React, { PropsWithChildren } from 'react';
import DefaultScreenHeader from '../../elements/DefaultScreenHeader';
import { HeaderWrapperProps } from './types';

const HeaderWrapper: React.FC<PropsWithChildren<HeaderWrapperProps>> = ({
  children,
  title,
}) => (
  <>
    <DefaultScreenHeader {...{ title }} />
    {children}
  </>
);

export default HeaderWrapper;

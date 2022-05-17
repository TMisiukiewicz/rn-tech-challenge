import React, { PropsWithChildren } from 'react';
import DefaultScreenHeader from '../../elements/DefaultScreenHeader';

const HeaderWrapper: React.FC<PropsWithChildren<unknown>> = ({ children }) => (
  <>
    <DefaultScreenHeader />
    {children}
  </>
);

export default HeaderWrapper;

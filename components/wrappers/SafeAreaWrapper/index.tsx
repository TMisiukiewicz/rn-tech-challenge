import React, { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeAreaPlaceholder from '../../styles/SafeAreaPlaceholder';

const SafeAreaWrapper: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <>
      <SafeAreaPlaceholder {...{ top }} />
      {children}
      <SafeAreaPlaceholder {...{ bottom }} />
    </>
  );
};

export default SafeAreaWrapper;

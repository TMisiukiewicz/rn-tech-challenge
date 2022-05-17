import React from 'react';
import { View } from 'react-native';
import {
  StyledBackIcon,
  StyledBackIconWrapper,
  StyledDefaultScreenHeaderWrapper,
} from './styles';
import Box from '../../styles/Box';
import { StyledText } from '../../styles/Typography/styles';
import shadow from '../../../utils/shadow';
import useStackNavigator from '../../../hooks/useStackNavigator';

const DefaultScreenHeader = () => {
  const navigation = useStackNavigator();

  return (
    <StyledDefaultScreenHeaderWrapper>
      {navigation.canGoBack() && (
        <StyledBackIconWrapper
          onPress={() => navigation.goBack()}
          style={shadow}
        >
          <StyledBackIcon
            source={require('../../../assets/images/back-icon.png')}
          />
        </StyledBackIconWrapper>
      )}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          padding: 8,
          marginBottom: 18,
        }}
      >
        <StyledText fontWeight='bold' fontSize={20}>
          Sign up with Email
        </StyledText>
        <Box />
      </View>
    </StyledDefaultScreenHeaderWrapper>
  );
};

export default DefaultScreenHeader;

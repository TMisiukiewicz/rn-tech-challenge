import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import {
  ProfileScreenWrapper,
  StyledLogOutButtonWrapper,
  StyledPageTitle,
} from './styles';
import SafeAreaWrapper from '../../components/wrappers/SafeAreaWrapper';
import Form from './components/Form';
import LogoutButton from '../../components/elements/LogoutButton';
import { useUserContext } from '../../contexts/UserContext';
import { ScreenProps } from '../../setup/navigation/types';

const ProfileScreen = ({ navigation }: ScreenProps<'Profile'>) => {
  const { logOut } = useUserContext();

  const onLogOut = async () => {
    try {
      await logOut();
      navigation.reset({ index: 0, routes: [{ name: 'Sign In' }] });
    } catch {
      console.error('could not log out');
    }
  };

  return (
    <RootSiblingParent>
      <ProfileScreenWrapper>
        <SafeAreaWrapper>
          <StyledPageTitle fontWeight='bold' fontSize={15}>
            PROFILE
          </StyledPageTitle>
          <Form />
          <StyledLogOutButtonWrapper>
            <LogoutButton label='Log out' onPress={onLogOut} />
          </StyledLogOutButtonWrapper>
        </SafeAreaWrapper>
      </ProfileScreenWrapper>
    </RootSiblingParent>
  );
};

export default ProfileScreen;

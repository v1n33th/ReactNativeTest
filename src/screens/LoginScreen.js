import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import LoginScreenLayout from '../components/layout/LoginScreenLayout';
import LoginState from '../models/LoginState';
import {loginUser} from '../redux/action/HomeScreenActions';
import {getDefaultLoginScreenState} from '../services/LoginScreenServices';
import {createTwoButtonAlert} from '../services/utils/DisplayUtils';

function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const onCLick = () => {
    const loginState = new LoginState(
      loginScreenLayoutState.loginTextInputState.enteredText,
      'testpass',
    );
    dispatch(loginUser(loginState));
  };
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const [loginScreenLayoutState, setLoginState] = useState(
    getDefaultLoginScreenState(onCLick),
  );

  const loginState = useSelector((state) => state.user.loginState);

  if (loginScreenLayoutState.buttonState.isLoading !== loginState.isLoading) {
    const nextLoginScreenLayoutState = {...loginScreenLayoutState};
    nextLoginScreenLayoutState.buttonState.isLoading = loginState.isLoading;
  }

  if (loginState.isSuccess) {
    //navigation.navigate('Home');
  } else if (loginState.isSuccess === false) {
    console.log('Login Error');
    loginState.isSuccess = false;
  }

  return (
    <LoginScreenLayout
      layoutState={loginScreenLayoutState}
      navigateToHome={navigateToHome}
    />
  );
}

export default LoginScreen;

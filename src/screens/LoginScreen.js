import React, {useState} from 'react';

import LoginScreenLayout from '../components/layout/LoginScreenLayout';
import {getDefaultLoginScreenState} from '../services/LoginScreenServices';

function LoginScreen({navigation}) {
  const onCLick = () => {
    const loginState = {...loginScreenLayoutState};
    loginState.buttonState.isLoading = true;
    setLoginState(loginState);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  };

  const [loginScreenLayoutState, setLoginState] = useState(
    getDefaultLoginScreenState(onCLick),
  );

  return <LoginScreenLayout layoutState={loginScreenLayoutState} />;
}

export default LoginScreen;

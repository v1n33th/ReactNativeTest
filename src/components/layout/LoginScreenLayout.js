import {View} from 'react-native';
import React from 'react';

import LoginTextInput from '../composed/LoginTextInput';
import AppStyles from '../../assets/styles/app_styles';
import ButtonWithProgress from '../composed/ButtonWithProgress';

function LoginScreenLayout(props) {
  return (
    <View style={AppStyles.common_background}>
      <LoginTextInput loginState={props.layoutState.loginTextInputState} />
      <LoginTextInput
        loginState={props.layoutState.loginPassInputState}
        textStyle={passWordConfig}
      />
      <ButtonWithProgress buttonState={props.layoutState.buttonState} />
    </View>
  );
}

const passWordConfig = {
  autoCompleteType: 'password',
  secureTextEntry: true,
  maxLength: 20,
};

export default LoginScreenLayout;

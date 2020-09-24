import {Text, View} from 'react-native';
import React from 'react';

import LoginTextInput from '../composed/LoginTextInput';
import AppStyles from '../../assets/styles/app_styles';
import ButtonWithProgress from '../composed/ButtonWithProgress';
import {NetworkConsumer} from 'react-native-offline';
import NetWorkStateText from '../basic/NetWorkStateText';
import BasicButton from '../basic/BasicButton';

function LoginScreenLayout(props) {
  return (
    <View style={AppStyles.common_background}>
      <LoginTextInput loginState={props.layoutState.loginTextInputState} />
      <LoginTextInput
        loginState={props.layoutState.loginPassInputState}
        textStyle={passWordConfig}
      />

      <ButtonWithProgress buttonState={props.layoutState.buttonState} />
      <BasicButton title="Navigate To Home" onPress={props.navigateToHome} />
      <NetWorkStateText />
      <NetworkConsumer>
        {({isConnected}) =>
          isConnected ? <Text>has Internet</Text> : <Text>no Internet</Text>
        }
      </NetworkConsumer>
    </View>
  );
}

const passWordConfig = {
  autoCompleteType: 'password',
  secureTextEntry: true,
  maxLength: 20,
};

export default LoginScreenLayout;

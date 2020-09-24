import React, {useState} from 'react';
import {View} from 'react-native';
import BorderedTextInput from '../basic/BorderedTextInput';
import ErrorText from '../basic/ErrorText';

function LoginTextInput(props) {
  const {isValid, isValidString, errorString} = props.loginState;
  const [isValidState, setErrorState] = useState(isValid);
  const [errorMessageState, setErrorMessageState] = useState(errorString);
  let errorMessageLbl;
  if (!isValidState) {
    errorMessageLbl = <ErrorText errorMessage={errorMessageState} />;
  } else {
    errorMessageLbl = null;
  }
  const onTextChange = (enteredText) => {
    const errorMessage = isValidString(enteredText);
    props.loginState.isValid = !errorMessage;
    props.loginState.enteredText = enteredText;
    setErrorState(!errorMessage);
    setErrorMessageState(errorMessage);
  };
  return (
    <View>
      <BorderedTextInput
        onChangeText={onTextChange}
        autoCompleteType="email"
        maxLength={35}
        {...props.textStyle}
      />
      {errorMessageLbl}
    </View>
  );
}

export default LoginTextInput;

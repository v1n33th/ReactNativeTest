import React from 'react';
import {TextInput} from 'react-native';
import AppStyles from '../../assets/styles/app_styles';

function BorderedTextInput(props) {
  return (
    <TextInput
      {...props}
      style={(props.style, AppStyles.text_input_background)}
    />
  );
}

export default BorderedTextInput;

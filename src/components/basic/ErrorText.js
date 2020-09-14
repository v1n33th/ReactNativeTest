import React from 'react';
import {Text} from 'react-native';
import AppStyles from '../../assets/styles/app_styles';

function ErrorText(props) {
  return (
    <Text {...props} style={(props.style, AppStyles.error_text_style)}>
      {props.errorMessage}
    </Text>
  );
}

export default ErrorText;

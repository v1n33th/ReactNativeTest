import React from 'react';
import {Text} from 'react-native';
import AppStyles from '../../assets/styles/app_styles';

function BasicTextView(props) {
  return (
    <Text style={(props.style, AppStyles.error_text_style)} {...props}>
      {props.label}
    </Text>
  );
}

export default BasicTextView;

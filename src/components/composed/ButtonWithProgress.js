import React from 'react';

import {ActivityIndicator} from 'react-native';
import BasicButton from '../basic/BasicButton';

function ButtonWithProgress(props) {
  const {isLoading, title, onCLick} = props.buttonState;
  let resultedView;
  if (isLoading) {
    resultedView = <ActivityIndicator size="large" color="#0000ff" />;
  } else {
    resultedView = <BasicButton title={title} onPress={onCLick} />;
  }
  return resultedView;
}

export default ButtonWithProgress;

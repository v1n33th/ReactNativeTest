import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import AppStyles from '../../assets/styles/app_styles';

function NetWorkStateText(props) {
  const netWorkState = useSelector((state) => state.network);
  return (
    <Text style={(props.style, AppStyles.normal_text_style)} {...props}>
      {netWorkState.isConnected
        ? 'Using Redux Store Listener  Connected'
        : ' Using Redux Store Listener Not Connected'}
    </Text>
  );
}

export default NetWorkStateText;

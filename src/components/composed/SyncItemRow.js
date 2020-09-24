import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SyncItemRow(props) {
  const action = props.action;
  return (
    <View style={style.viewStyle}>
      <Text style={style.textStyle}>{action.type.toString()}</Text>
      <Text style={style.textStyle}>username ={action.payLoad.userName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    flex: 1,
    height: 50,
  },
});

export default SyncItemRow;

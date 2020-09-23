import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function UserListRow(props) {
  const user = props.user;
  return (
    <View style={style.viewStyle}>
      <Text style={style.textStyle}>{user.userName}</Text>
      <Text style={style.textStyle}>{user.gender}</Text>
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

export default UserListRow;

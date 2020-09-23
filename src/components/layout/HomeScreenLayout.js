import {FlatList} from 'react-native';
import React from 'react';

import AppStyles from '../../assets/styles/app_styles';
import UserListRow from '../composed/UserListRow';

function HomeScreenLayout(props) {
  const userList = props.users;

  return (
    <FlatList
      style={AppStyles.common_background}
      data={userList}
      renderItem={({item}) => <UserListRow user={item} />}
      keyExtractor={(user) => user.userId.toString()}
    />
  );
}

export default HomeScreenLayout;

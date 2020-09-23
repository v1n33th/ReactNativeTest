import React from 'react';
import {useSelector} from 'react-redux';

import HomeScreenLayout from '../components/layout/HomeScreenLayout';

function HomeScreen({navigation}) {
  const users = useSelector((state) => state.user.users);
  return <HomeScreenLayout users={users} />;
}

export default HomeScreen;

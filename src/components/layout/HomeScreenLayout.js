import {
  FlatList,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import AppStyles from '../../assets/styles/app_styles';
import UserListRow from '../composed/UserListRow';
import {useSelector} from 'react-redux';
import SyncItemRow from '../composed/SyncItemRow';

function HomeScreenLayout(props) {
  const pendingItemsToSync = useSelector((state) => state.network.actionQueue);
  const syncedItems = useSelector((state) => state.doneTask);
  console.log('Pending items are' + pendingItemsToSync);
  const DATA = [
    {
      title: 'Synced items',
      data: syncedItems,
    },
    {
      title: 'Pending Items',
      data: pendingItemsToSync,
    },
  ];

  return (
    <SafeAreaView style={AppStyles.common_background}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <SyncItemRow action={item} />}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    </SafeAreaView>
  );
}

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreenLayout;

import React, {useEffect} from 'react';

import {Provider, useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import {store, RootState} from './store'; // Import your Redux store and RootState
import {fetchUsers} from './features/users/usersSlice'; // Import the action to fetch users

const CentralUser: React.FC<{name: string}> = ({name}) => (
  <View style={styles.centralUser}>
    <Text>{name}</Text>
  </View>
);

const UserCard: React.FC<{name: string; tier: string}> = ({name, tier}) => {
  const tierStyle = styles[`tier${tier}` as keyof typeof styles];
  return (
    <View style={[styles.card, tierStyle]}>
      <Text>{name}</Text>
    </View>
  );
};

const ConnectionLine = () => <View style={styles.connectionLine}></View>;

const AppContent: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  // In AppContent
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#FFF',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CentralUser name="Main User" />
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} tier={user.tier} />
      ))}
      <ConnectionLine />
    </SafeAreaView>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centralUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4e4e4e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  tier1: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6fa1f2',
  },
  tier2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#a4c1f3',
  },
  connectionLine: {
    height: 1,
    backgroundColor: '#000',
    position: 'absolute',
  },
  // ... Other styles
});

export default App;

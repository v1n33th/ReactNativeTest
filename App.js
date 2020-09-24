import 'react-native-gesture-handler';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configurestore';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NetworkProvider} from 'react-native-offline';

const Stack = createStackNavigator();
const {store, persistor} = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NetworkProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NetworkProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;

import {Alert} from 'react-native';

export const createTwoButtonAlert = () =>
  Alert.alert(
    'Error While Loggin In',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );

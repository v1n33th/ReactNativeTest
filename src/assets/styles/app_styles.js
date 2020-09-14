import {StyleSheet} from 'react-native';
import Colors from '../constants/colors';

export const AppStyles = StyleSheet.create({
  common_background: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_ACCENT,
  },
  text_input_background: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  error_text_style: {
    textAlign: 'center',
    color: 'red',
  },
});

export default AppStyles;

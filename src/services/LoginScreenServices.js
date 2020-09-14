import ButtonState from '../models/ButtonStates';
import LoginTextInputState from '../models/LoginTextInputState';
import {validateEmail} from './Utils/StringUtils';

export function getDefaultLoginScreenState(onCLick) {
  console.log('Called Deafualt State');
  const isValidEmail = (text) => {
    if (validateEmail(text)) {
      return '';
    } else {
      return 'Email is not valid';
    }
  };
  return {
    loginTextInputState: new LoginTextInputState(
      (text) => isValidEmail(text),
      'Email Error',
    ),
    loginPassInputState: new LoginTextInputState(isValidEmail),
    buttonState: new ButtonState(false, 'Login', onCLick),
  };
}

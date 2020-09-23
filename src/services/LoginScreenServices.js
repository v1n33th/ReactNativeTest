import ButtonState from '../models/ButtonStates';
import LoginTextInputState from '../models/LoginTextInputState';
import User from '../models/User';
import {validateEmail} from './utils/StringUtils';

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

export function getInitialUsers() {
  const users = [];
  for (let i = 0; i < 1000; ++i) {
    users.push(new User(i, `User ${i}`, i % 2 === 0 ? 'Male' : 'Female'));
  }
  return users;
}

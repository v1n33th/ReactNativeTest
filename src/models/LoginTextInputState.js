export default class LoginInputState {
  constructor(isValidString, errorMessage, isValid = true, enteredText = '') {
    this.isValidString = isValidString;
    this.isValid = isValid;
    this.errorMessage = errorMessage;
    this.enteredText = enteredText;
  }
}

export default class LoginInputState {
  constructor(isValidString, errorMessage, isValid = true) {
    this.isValidString = isValidString;
    this.isValid = isValid;
    this.errorMessage = errorMessage;
  }
}

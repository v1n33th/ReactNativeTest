export default class LoginState {
  constructor(
    userName = '',
    passWord = '',
    isLoading = false,
    isSuccess = null,
  ) {
    this.userName = userName;
    this.passWord = passWord;
    this.isLoading = isLoading;
    this.isSuccess = isSuccess;
  }
}

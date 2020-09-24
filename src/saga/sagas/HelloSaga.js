export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
  console.log('yay Saga working');
}

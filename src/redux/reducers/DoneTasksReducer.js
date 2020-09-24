const {ADD_DONE_TASK} = require('../../assets/constants/redux/actions');

function doneTaskReducer(state = [], action) {
  if (action.type === ADD_DONE_TASK) {
    const nextState = [...state];
    nextState.push(action.payLoad);
    console.log('LOGIN_USER REDUCER Entered');
    return nextState;
  }
  return state;
}

export default doneTaskReducer;

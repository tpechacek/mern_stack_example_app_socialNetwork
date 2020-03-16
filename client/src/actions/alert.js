import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// dispatch comes from Thunk middlware.
export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    // This is how it resolves the type. It will trigger the relevant reducer.
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};

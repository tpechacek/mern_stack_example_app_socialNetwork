import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// dispatch comes from Thunk middlware.
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    // This is how it resolves the type. It will trigger the relevant reducer.
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // After 5 seconds will dispatch to remove alert and match by ID.
  // this will make it to the reducer and update the array of alerts
  // within the global redux store.
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

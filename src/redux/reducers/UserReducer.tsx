import {AnyAction} from 'redux';
import {UserActionTypes} from '../types/UserTypes';

const INITIAL_STATE = { 
  user: null,
  auth: false,
  error: null,
}

export default (state = INITIAL_STATE, action: AnyAction) => {
  console.log('action', action);
  switch (action.type) {
    case UserActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        auth: true,
      };
      case UserActionTypes.LOG_IN_FAIL:
        return {
          ...state,
          user: null,
          auth: false,
          error: {msg: "login failed"}
        };
    default:
      return state;
  }
};

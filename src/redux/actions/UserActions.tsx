
import {UserActionTypes} from '../types/UserTypes';
import {AppThunk} from '~redux/types/AppThunk';
import axios from 'axios';

export const setStateToFetching = (payload: any) => ({
  type: UserActionTypes.LOG_IN, 
  payload: payload 
})

export const setStateToSuccess = (payload: any) => ({
  type: UserActionTypes.LOG_IN_SUCCESS,
  payload: payload
})

export const setStateToFailed = () => ({
  type: UserActionTypes.LOG_IN_FAIL,
})

export const feedData = (username: string, password: string) =>{
  return async dispatch => {

    let url = "http://localhost:9000/login";

    let params = `username=${username}&password=${password}`;
    axios
      .post(url, params, {
        headers: { "content-type": "application/x-www-form-urlencoded" }
      })
      .then(response => {
        console.log(JSON.stringify(response.data));
        dispatch(setStateToSuccess(response.data.user))
      }).catch(error=>[
        dispatch(setStateToFailed())
      ]);

  }
}

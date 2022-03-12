import { USER_FAILED, USER_FETCHING, USER_SUCCESS } from "../Constants";

import axios from 'axios';
import { UserFailed, UserFetching, UserSuccess } from "../types/UserTypes";
import { AppThunk } from "../types/AppThunk";

// Called by reducer
const setUSERToFetching = (): UserFetching => ({
    type: USER_FETCHING,
})

const setUSERToSuccess = (payload:any): UserSuccess => ({
    type: USER_SUCCESS,
    payload
})

const setUSERToFailed = (error:any): UserFailed => ({
    type: USER_FAILED,
    error
})


// Called UI Component
export const feedUSER = (): AppThunk => async dispatch => {
    try {
        dispatch(setUSERToFetching());
        const result = await doFeedUSER();
        dispatch(setUSERToSuccess(result.data));
    } catch (error) {
        dispatch(setUSERToFailed(error));
    }
};

const doFeedUSER = async () => {
    
    let regUsername = 'test';
    let regPassword = 'test';
    
    let url = 'http://10.0.2.2:9000/login?username='+regUsername+'&password='+regPassword;
    let res = await axios.get(url,  {headers: { "content-type": "application/x-www-form-urlencoded" }});
    return res;
};


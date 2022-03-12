import { USER_FAILED, USER_FETCHING, USER_SUCCESS } from "../Constants";
import {AnyAction} from 'redux';

export interface UserfeedState {
    result: any,
    isFetching: boolean,
    isError: boolean
    isAuth: boolean
}

const initialState: UserfeedState = {
    result: [],
    isFetching: false,
    isError: false,
    isAuth: false
};

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case USER_FETCHING:
            return { ...state, result: null, isFetching: true, isError: false, isAuth: false };
        case USER_SUCCESS:
            console.log("USER_SUCCESS >> "+action.payload);
            return { ...state, isFetching: false, isError: false, result: action.payload, isAuth:true };
        case USER_FAILED:
            return { ...state, result: null, isFetching: false, isError: true, isAuth: false };

        default:
            return state;
    }
};

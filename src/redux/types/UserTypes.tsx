import {USER_FETCHING, USER_SUCCESS, USER_FAILED} from '../Constants';

export interface UserFetching {
  type: typeof USER_FETCHING;
}

export interface UserSuccess {
  type: typeof USER_SUCCESS;
  payload: any[];
}

export interface UserFailed {
  type: typeof USER_FAILED;
  error: string;
}


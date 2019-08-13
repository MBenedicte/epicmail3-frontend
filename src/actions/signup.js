import { signupActionTypes } from '../actions-types';
import { apiAction } from '../helpers/index';

export const signUp = user => async dispatch => dispatch(apiAction({
  method: 'post',
  url: '/notifications/configuration',
  data: { user },
  onStart: signupActionTypes.SIGNUP_START,
  onSuccess: signupActionTypes.SIGNUP_SUCCESS,
  onFailure: signupActionTypes.SIGNUP_FAILURE,
  onEnd: signupActionTypes.SIGNUP_END
}));

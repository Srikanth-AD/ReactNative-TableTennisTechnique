import {
  EMAIL_CHANGED,
  FORGOT_PASSWORD_EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER } from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  forgotPasswordEmail: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case FORGOT_PASSWORD_EMAIL_CHANGED:      
      return { ...state, forgotPasswordEmail: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return {...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication failed.', password: '', loading: false };

    default:
      return state;
  }
};

import sagas from "../sagas";
import {
    ADD_TO_CHANNEL_FAILURE,
    ADD_TO_CHANNEL_SUCCESS,
    GET_ALL_CHANNELS_FAILURE,
    GET_ALL_CHANNELS_SUCCESS,
    GET_MY_CHANNELS_FAILURE,
    GET_MY_CHANNELS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SHOW_ALL_CHANNELS,
  SHOW_MY_CHANNELS_MOBILE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../types";

const initialState = {
  login: "",
  signup: [],
  signin: [],
  show_channels:false,
  username: "",
  channels: [],
  my_channels: [],
  is_add_success:"",
  show_my_channels_mobile:false
};

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_FAILURE:
      state.signup = payload;
      return { ...state };
    case LOGIN_SUCCESS:
      state.login = payload;
      return {
        ...state,
      };
    case LOGIN_FAILURE:
      state.signin = payload;
      return { ...state };
    case GET_MY_CHANNELS_SUCCESS:
        state.my_channels = payload
        return {...state}
    case GET_MY_CHANNELS_FAILURE:
        state.my_channels = payload
        return {...state}
    case SHOW_ALL_CHANNELS:
        state.show_channels = !state.show_channels
        return {...state}
    case GET_ALL_CHANNELS_SUCCESS:
        state.channels = payload
        return {...state}
    case GET_ALL_CHANNELS_FAILURE:
        state.channels = payload
        return  {...state}
    case ADD_TO_CHANNEL_SUCCESS:
        state.is_add_success = payload
        return {...state}
    case ADD_TO_CHANNEL_FAILURE:
        state.is_add_success = payload
        return {...state}
    case SHOW_MY_CHANNELS_MOBILE:
        state.show_my_channels_mobile = !state.show_my_channels_mobile
        return {...state}
    default:
      return {
        ...state,
      };
  }
};

export default AppReducer;

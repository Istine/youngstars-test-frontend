import { GET_MY_CHANNELS_SAGA, LOGIN_SAGA, SIGNUP_SAGA,SHOW_ALL_CHANNELS_SAGA, GET_ALL_CHANNELS_SAGA, ADD_CHANNEL_SAGA, SHOW_MY_CHANNELS_MOBILE_SAGA } from "../types";

export const login = (payload) => {
  return {
    type: LOGIN_SAGA,
    payload,
  };
};

export const signup = (payload) => ({
  type: SIGNUP_SAGA,
  payload,
});

export const get_my_channels = () => {
  return { type: GET_MY_CHANNELS_SAGA };
};

export const show_all_channels = () => {
    return  {
        type:SHOW_ALL_CHANNELS_SAGA
    }
}

export const get_all_channels = () => {
    return {
        type:GET_ALL_CHANNELS_SAGA
    }
}

export const add_channel = (payload) => {
    return {
        type:ADD_CHANNEL_SAGA,
        payload
    }
}

export const show_my_channels_mobile = () => {
  return {
    type:SHOW_MY_CHANNELS_MOBILE_SAGA
  }
}
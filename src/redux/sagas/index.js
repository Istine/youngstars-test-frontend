import { put, all, call, takeEvery, takeLatest } from "redux-saga/effects";
import decode from "jwt-decode";
import {
  LOGIN_SAGA,
  SIGNUP_SAGA,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_MY_CHANNELS_SAGA,
  GET_MY_CHANNELS_SUCCESS,
  GET_MY_CHANNELS_FAILURE,
  SHOW_ALL_CHANNELS,
  SHOW_ALL_CHANNELS_SAGA,
  GET_ALL_CHANNELS_SAGA,
  GET_ALL_CHANNELS_SUCCESS,
  GET_ALL_CHANNELS_FAILURE,
  ADD_CHANNEL_SAGA,
  ADD_TO_CHANNEL_SUCCESS,
  ADD_TO_CHANNEL_FAILURE,
  SHOW_MY_CHANNELS_MOBILE_SAGA,
  SHOW_MY_CHANNELS_MOBILE,
} from "../types";

const BASE_URL = "http://localhost:8000";

export const storeTokenLocalstorage = (token) => {
  localStorage.setItem("token", token);
};

export const getTokenLocalstorage = () => {
  let token = localStorage.getItem("token");
  return token;
};

//workers
export function* login_worker({ payload }) {
  try {
    const response = yield fetch(`${BASE_URL}/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = yield response.json();
    if (json.message === "Login success") {
      yield storeTokenLocalstorage(json.data.token);
      yield put({
        type: LOGIN_SUCCESS,
        payload: decode(getTokenLocalstorage()).username,
      });
      yield (window.location.href = "/dashboard");
    } else {
      yield put({ type: LOGIN_FAILURE, payload: json.message });
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: ["Something went wrong..."] });
  }
}

export function* signup_worker(action) {
  try {
    const response = yield fetch(`${BASE_URL}/signup`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    const json = yield response.json();
    if (json.message === "Successfully created user") {
      window.location.href = "/login";
    } else {
      yield put({ type: SIGNUP_FAILURE, payload: json.message });
    }
  } catch (err) {}
}

export function* get_my_channels_worker(action) {
  try {
    const response = yield fetch(
      `${BASE_URL}/channels/my-channels?username=${
        decode(getTokenLocalstorage()).username
      }`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getTokenLocalstorage()}`,
        },
      }
    );
    const data = yield response.json();
    if (data.message && data.message === "success") {
      yield put({ type: GET_MY_CHANNELS_SUCCESS, payload: data.data });
    } else {
      yield put({
        type: GET_MY_CHANNELS_FAILURE,
        payload: ["Something went wrong."],
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* all_channels_worker(action) {
  yield put({ type: SHOW_ALL_CHANNELS, payload: true });
}

export function* get_all_channels_worker() {
  try {
    const response = yield fetch(`${BASE_URL}/channels`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getTokenLocalstorage()}`,
      },
    });

    const json = yield response.json();
    if (json.message && json.message === "Success") {
      yield put({ type: GET_ALL_CHANNELS_SUCCESS, payload: json.data });
    } else {
      yield put({
        type: GET_ALL_CHANNELS_FAILURE,
        payload: ["Something went wrong."],
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* add_channel_worker({ payload }) {
  try {
    const response = yield fetch(`${BASE_URL}/channels`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${getTokenLocalstorage()}`,
      },
      body:JSON.stringify({subscribe_to:payload})
    });
    const json = yield response.json()
    if(json.message && json.data.nModified === 1) {
        yield put({type:ADD_TO_CHANNEL_SUCCESS, payload:"successfully added"})
    }
    else if(json.code == 500) {
        yield put({type:ADD_TO_CHANNEL_FAILURE, payload:"Duplicate Subscriptions"})
    }
    else{
      return
    }
  } catch (error) {}
}

export function* show_my_channels_mobile_worker(action) {
  yield put({type:SHOW_MY_CHANNELS_MOBILE, payload:true})

}

//watchers
export function* login_Watcher() {
  yield takeEvery(LOGIN_SAGA, login_worker);
}

export function* signup_watcher() {
  yield takeEvery(SIGNUP_SAGA, signup_worker);
}

export function* get_my_channels_watcher() {
  yield takeEvery(GET_MY_CHANNELS_SAGA, get_my_channels_worker);
}

export function* all_channels_watcher() {
  yield takeEvery(SHOW_ALL_CHANNELS_SAGA, all_channels_worker);
}

export function* get_all_channels_watcher() {
  yield takeLatest(GET_ALL_CHANNELS_SAGA, get_all_channels_worker);
}

export function* add_channel_watcher() {
  yield takeLatest(ADD_CHANNEL_SAGA, add_channel_worker);
}

export function* show_my_channels_mobile_watcher() {
  yield takeEvery(SHOW_MY_CHANNELS_MOBILE_SAGA, show_my_channels_mobile_worker)
}

export default function* sagas() {
  yield all([
    login_Watcher(),
    signup_watcher(),
    get_my_channels_watcher(),
    all_channels_watcher(),
    get_all_channels_watcher(),
    add_channel_watcher(),
    show_my_channels_mobile_watcher()
  ]);
}

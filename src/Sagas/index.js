import {takeLatest} from 'redux-saga'
import API from '../Services/Api'
/* ------------- Types ------------- */

import {SupportTypes} from '../Redux/SupportRedux'

/* ------------- Sagas ------------- */

import {sendMessage} from "./SupportSaga";

/* ------------- API ------------- */

const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(SupportTypes.SUPPORT_REQUEST, sendMessage, api),
  ]
}
import {call, put} from 'redux-saga/effects'
import SupportActions from '../Redux/SupportRedux'

export function * sendMessage(api, action) {
  const response = yield call(api.SendMessage);
  if (response.ok && response.data) {
    yield put(SupportActions.supportSuccess(response.data))
  } else {
    yield put(SupportActions.supportFailure())
  }
}

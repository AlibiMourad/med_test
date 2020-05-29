import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/doctors';
import * as api from '../api/doctors';

function* getDoctors() {
  try {
    const result = yield call(api.getDoctors);
    yield put(actions.getDoctorsSuccess(result.data.data));
    
  } catch (error) {
    console.error(error);
  }
}

function* watchGetDoctorsRequest() {
  yield takeEvery(actions.Types.GET_DOCTORS_REQUEST, getDoctors);
}

const doctorSagas = [fork(watchGetDoctorsRequest)];

export default doctorSagas;

import { all } from 'redux-saga/effects';
import doctorSagas from './doctors';

export default function* rootSaga() {
  yield all([...doctorSagas]);
}

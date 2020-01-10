import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getData() {
  return fetch("https://www.alphavantage.co/query?function=SECTOR&apikey=4VGK4NIB2TJW093I").then(response =>
    response.json()
  );
}
//https://www.alphavantage.co/query?function=SECTOR&apikey=4VGK4NIB2TJW093I

//https://jsonplaceholder.typicode.com/posts
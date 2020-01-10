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

async function getData() {
  const sectorresp = await fetch('https://www.alphavantage.co/query?function=SECTOR&apikey=4VGK4NIB2TJW093I');
  const sectora = await sectorresp.json();
  console.log(sectora);
  const sector = await sectora["Rank A: Real-Time Performance"];
  console.log(sector);
  let resultjson = datagen(sector);


  console.log("resultjson");

  console.log(resultjson);
  return resultjson;

}



function datagen(sector) {
  let resultjson = [];
  resultjson.push({ name: "xlc", value: parseFloat(sector["Communication Services"]) });
  resultjson.push({ name: "xly", value: parseFloat(sector["Consumer Discretionary"]) });
  resultjson.push({ name: "xlp", value: parseFloat(sector["Consumer Staples"]) });
  resultjson.push({ name: "xle", value: parseFloat(sector["Energy"]) });
  resultjson.push({ name: "xlf", value: parseFloat(sector["Financials"]) });
  resultjson.push({ name: "xlv", value: parseFloat(sector["Health Care"]) });
  resultjson.push({ name: "xli", value: parseFloat(sector["Industrials"]) });
  resultjson.push({ name: "xlk", value: parseFloat(sector["Information Technology"]) });
  resultjson.push({ name: "xlb", value: parseFloat(sector["Materials"]) });
  resultjson.push({ name: "xlre", value: parseFloat(sector["Real Estate"]) });
  resultjson.push({ name: "xlu", value: parseFloat(sector["Utilities"]) });
  return resultjson;
}
//https://www.alphavantage.co/query?function=SECTOR&apikey=4VGK4NIB2TJW093I

//https://jsonplaceholder.typicode.com/posts
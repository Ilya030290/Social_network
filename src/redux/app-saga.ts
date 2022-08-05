import {put, takeEvery} from "redux-saga/effects";
import {getAuthUserData} from "./auth-sagas";
import {initializedSuccessAC} from "./app-reducer";


export function* appWatcherSaga() {
    yield takeEvery("app/INITIALIZE-APP", initializeAppWorkerSaga);
}

export function* initializeAppWorkerSaga() {
    yield put(getAuthUserData());
    yield put(initializedSuccessAC());
}
export const initializeApp = () => ({type: "app/INITIALIZE-APP"});
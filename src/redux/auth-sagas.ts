import {authAPI, AuthResponseType} from "../api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {setAuthUserData} from "./auth-reducer";
import {stopSubmit} from "redux-form";
import {AxiosResponse} from "axios";


export function* authWatcherSaga() {
    yield takeEvery("auth/GET-AUTH-USER-DATA", getAuthUserDataWorkerSaga)
    yield takeEvery("auth/MAKE-LOG-IN", makeLogInWorkerSaga)
    yield takeEvery("auth/MAKE-LOG-OUT", makeLogOutWorkerSaga)
}

export function* getAuthUserDataWorkerSaga() {
    const res: AuthResponseType = yield call(authAPI.getAuth);
    if (res.resultCode === 0) {
        let {id, email, login} = res.data;
        yield put(setAuthUserData(id, email, login));
    }
}
export const getAuthUserData = () => ({type: "auth/GET-AUTH-USER-DATA"});


export function* makeLogInWorkerSaga(action: ReturnType<typeof makeLogIn>) {
    const res: AxiosResponse = yield call(authAPI.logIn, action.email, action.password, action.rememberMe);
    if (res.data.resultCode === 0) {
        window.location.reload();
    } else {
        let errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
        yield put(stopSubmit('login', {_error: errorMessage}));
    }
}
export const makeLogIn = (email: string, password: string, rememberMe: boolean) => ({type: "auth/MAKE-LOG-IN", email, password, rememberMe});


export function* makeLogOutWorkerSaga(action: ReturnType<typeof makeLogOut>) {
    yield call(authAPI.logOut);
    window.location.reload();
}
export const makeLogOut = () => ({type: "auth/MAKE-LOG-OUT"});
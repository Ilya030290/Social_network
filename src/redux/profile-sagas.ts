import {call, put, takeEvery} from "redux-saga/effects";
import {profileAPI, ProfileDataResponseType} from "../api/api";
import {AxiosResponse} from "axios";
import {setStatus, setUserProfile, toggleIsFetching} from "./profile-reducer";


export function* profileWatcherSaga() {
    yield takeEvery("profile/GET-USER-PROFILE", getUserProfileWorkerSaga);
    yield takeEvery("profile/GET-USER-STATUS", getUserStatusWorkerSaga);
    yield takeEvery("profile/UPDATE-USER-STATUS", updateUserStatusWorkerSaga);
}

export function* getUserProfileWorkerSaga(action: ReturnType<typeof getUserProfile>) {
    yield put(toggleIsFetching(true));
    const res: ProfileDataResponseType = yield call(profileAPI.getProfile, action.userId);
    yield put(setUserProfile(res));
    yield put(toggleIsFetching(false));
}
export const getUserProfile = (userId: number | undefined) => ({type: "profile/GET-USER-PROFILE", userId} as const);

export function* getUserStatusWorkerSaga(action: ReturnType<typeof getUserStatus>) {
    yield put(toggleIsFetching(true));
    const res: AxiosResponse = yield call(profileAPI.getStatus, action.userId);
    if (res.data) {
        yield put(setStatus(res.data));
    } else {
        yield put(setStatus('Status not found'));
        yield put(toggleIsFetching(false));
    }
}
export const getUserStatus = (userId: number | undefined) => ({type: "profile/GET-USER-STATUS", userId} as const);

export function* updateUserStatusWorkerSaga(action: ReturnType<typeof updateUserStatus>) {
    const res: AxiosResponse = yield call(profileAPI.updateStatus, action.status);
    if (res.data.resultCode == 0) {
        yield put(setStatus(action.status));
    }
}
export const updateUserStatus = (status: string) => ({type: "profile/UPDATE-USER-STATUS", status});
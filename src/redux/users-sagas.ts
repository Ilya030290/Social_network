import {call, put, takeEvery} from "redux-saga/effects";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    toggleIsFetching, unFollow
} from "./users-reducer";
import {usersAPI, UsersDataResponseType} from "../api/api";
import {AxiosResponse} from "axios";


export function* usersWatcherSaga() {
    yield takeEvery("users/GET-USERS-LIST", getUsersListWorkerSaga);
    yield takeEvery("users/FOLLOW-USERS", followUsersWorkerSaga);
    yield takeEvery("users/UNFOLLOW-USERS", unFollowUsersWorkerSaga);
}

export function* getUsersListWorkerSaga(action: ReturnType<typeof getUsersList>) {
    yield put(setCurrentPage(action.currentPage));
    yield put(toggleIsFetching(true));
    const res: UsersDataResponseType = yield call(usersAPI.getUsers, action.currentPage, action.pageSize);
    yield put(toggleIsFetching(false));
    yield put(setUsers(res.items));
    yield put(setTotalUsersCount(res.totalCount));
}
export const getUsersList = (currentPage: number, pageSize: number) => ({type: "users/GET-USERS-LIST", currentPage, pageSize} as const);

export function* followUsersWorkerSaga(action: ReturnType<typeof followUsers>) {
    yield put(toggleFollowingInProgress(true, action.userId));
    const res: AxiosResponse = yield call(usersAPI.follow, action.userId);
    if (res.data.resultCode === 0) {
        yield put(follow(action.userId));
    }
    yield put(toggleFollowingInProgress(false, action.userId));
}
export const followUsers = (userId: number) => ({type: "users/FOLLOW-USERS", userId} as const);

export function* unFollowUsersWorkerSaga(action: ReturnType<typeof unFollowUsers>) {
    yield put(toggleFollowingInProgress(true, action.userId));
    const res: AxiosResponse = yield call(usersAPI.unFollow, action.userId);
    if (res.data.resultCode === 0) {
        yield put(unFollow(action.userId));
    }
    yield put(toggleFollowingInProgress(false, action.userId));
}
export const unFollowUsers = (userId: number) => ({type: "users/UNFOLLOW-USERS", userId} as const);
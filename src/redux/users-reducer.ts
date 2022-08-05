export type UserType = {
    id: number
    photos: {
        small: string | null,
        large: string | null
    }
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
}

export type UsersReducerActionsTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export type UsersReducerStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

let initialState: UsersReducerStateType = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export const usersReducer = (state: UsersReducerStateType = initialState, action: UsersReducerActionsTypes): UsersReducerStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        case 'SET_USERS':
            return {...state, users: action.users};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId: userId} as const);
export const unFollow = (userId: number) => ({type: 'UNFOLLOW', userId: userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users: users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage: currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount: totalUsersCount} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching} as const);
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    followingInProgress: followingInProgress,
    userId: userId
} as const);


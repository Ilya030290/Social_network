export type AuthReducerStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: AuthReducerStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export type AuthReducerActionsType = ReturnType<typeof setAuthUserData>;

export const authReducer = (state: AuthReducerStateType = initialState, action: AuthReducerActionsType): AuthReducerStateType => {
    switch (action.type) {
        case 'auth/SET-AUTH-USER-DATA':
            return {...state, ...action.data, isAuth: true};
        default:
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({type: 'auth/SET-AUTH-USER-DATA', data: {id, email, login}} as const);

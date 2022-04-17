export type initialStateType = {
    userId: string,
    email: string,
    login: string,
    isAuth: boolean
}

const initialState: initialStateType = {
    userId: '',
    email: '',
    login: '',
    isAuth: false
}

type setAuthUserDataAT = {
    type: 'SET-USER-DATA',
    data: {
        userId: string,
        email: string,
        login: string
    }
}

type ActionsType = setAuthUserDataAT;

export const authReducer = (state: initialStateType = initialState, action: ActionsType) : initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: string, email: string, login: string): setAuthUserDataAT => ({
    type: 'SET-USER-DATA',
    data: {userId, email, login}
})
const initialState = {
    initialized: false
}
export type InitialAppReducerStateType = typeof initialState;
export type AppReducerActionsType = ReturnType<typeof initializedSuccessAC>;

export const appReducer = (state: InitialAppReducerStateType = initialState, action: AppReducerActionsType): InitialAppReducerStateType => {
    switch(action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initialized: true};
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({type: "INITIALIZED_SUCCESS"} as const);



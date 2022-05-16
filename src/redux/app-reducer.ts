import {ThunkType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const initialState = {
    initialized: false
}
export type InitialAppReducerStateType = typeof initialState;

type setInitializedAT = ReturnType<typeof initializedSuccessAC>;
export type AppReducerActionsType = setInitializedAT;

export const appReducer = (state: InitialAppReducerStateType = initialState, action: AppReducerActionsType): InitialAppReducerStateType => {
    switch(action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initialized: true};
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({type: "INITIALIZED_SUCCESS"});

//ThunkCreator

export const initializeApp = (): ThunkType => (dispatch) => {
       let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccessAC());
    });
    }

import {DialogsProfileReducersActionsTypes} from "./profile-reducer";


type SidebarReducerState = {}

let initialState = {}

export const sidebarReducer = (state: SidebarReducerState = initialState, action: DialogsProfileReducersActionsTypes) => {
    switch (action.type) {
        default:
            return state;
    }
};


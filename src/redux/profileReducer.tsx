import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {sendMessageActionType, updateNewMessageBodyActionType} from "./dialogsReducer";
import {
    followActionType,
    setCurrentPageActionType,
    setTotalUsersCountActionType,
    setUsersActionType,
    toggleIsFetchingActionType,
    unFollowActionType
} from "./usersReducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";

export type addPostActionType = {
    type: 'ADD-POST'
}

export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type setUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: UserProfileType
}

export type ActionsTypes = addPostActionType
    | updateNewPostTextActionType
    | updateNewMessageBodyActionType
    | sendMessageActionType
    | followActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | setUserProfileActionType


export type ProfileReducerStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType
}

let initialState: ProfileReducerStateType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 13},
        {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
    ] as Array<PostType>,
    newPostText: '',
    profile: {
        aboutMe: 'me',
        contacts: {
            facebook: 'adasd',
            github: 'asds',
            instagram: 'asd',
            mainLink: 'dsad',
            vk: 'asdsadxcvf',
            twitter: 'sadsacxz',
            website: 'asdqwqw',
            youtube: 'oioqidwqh'
        },
        fullName: 'Ilya Anoshko',
        lookingForAJob: true,
        lookingForAJobDescription: 'I look for a new job, heeelp me please',
        photos: {
             large: null,
            small: null
        },
         userId: 30
    }
}

export const profileReducer = (state: ProfileReducerStateType = initialState, action: ActionsTypes): ProfileReducerStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                newPostText: '',
                posts: [{id: new Date().getTime(), message: state.newPostText, likeCount: 0}, ...state.posts]
            };
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export const addPost = (): addPostActionType => ({type: 'ADD-POST'})
export const updateNewPostText = (text: string): updateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
})
export const setUserProfile = (profile: UserProfileType): setUserProfileActionType => ({
    type: 'SET_USER_PROFILE',
    profile: profile
})
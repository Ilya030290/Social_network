import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import {UserProfileType} from "../components/Profile/ProfileContainer";

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type DialogsProfileReducersActionsTypes =
        ReturnType<typeof addPost>
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof deletePost>


export type ProfileReducerStateType = {
    posts: Array<PostType>
    profile: UserProfileType | null
    status: string
    isFetching: boolean
}

let initialState: ProfileReducerStateType = {
    posts: [
        {id: 1, message: 'My first post', likeCount: 13},
        {id: 2, message: 'I want to be a frontend developer', likeCount: 15}
    ] as Array<PostType>,
    profile: {
        aboutMe: 'I want tobe a frontend developer',
        contacts: {
            facebook: 'none',
            github: 'https://github.com/Ilya030290',
            instagram: 'https://instagram.com/',
            mainLink: 'none',
            vk: 'none',
            twitter: 'none',
            website: 'none',
            youtube: 'none'
        },
        fullName: 'Ilya Anoshko',
        lookingForAJob: true,
        lookingForAJobDescription: 'I look for a new job, help me please',
        photos: {
            large: null,
            small: null
        },
        userId: 230
    },
    status: "",
    isFetching: false
}

export const profileReducer = (state: ProfileReducerStateType = initialState, action: DialogsProfileReducersActionsTypes): ProfileReducerStateType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [{id: new Date().getTime(), message: action.newPostText, likeCount: 0}, ...state.posts]
            };
        case "DELETE_POST":
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)};
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile};
        case "SET_STATUS":
            return {...state, status: action.status};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const);
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET_USER_PROFILE', profile: profile} as const);
export const deletePost = (postId: number) => ({type: "DELETE_POST", postId} as const);
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching: isFetching} as const);


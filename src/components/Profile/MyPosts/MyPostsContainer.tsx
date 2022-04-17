import MyPosts from "./MyPosts";
import {addPost, ProfileReducerStateType, updateNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    profilePage: ProfileReducerStateType
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType



const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


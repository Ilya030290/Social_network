import React from "react";
import MyPosts from "../MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profileReducer";
import {ReduxStoreType} from "../../../../redux/redux-store";


type MyPostsContainerPropsType = {
    store: ReduxStoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const onPostChange = (text: string) => {
        let action =  updateNewPostTextCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
            updateNewPostText={onPostChange}
            addPost={addPost}
        />
    );
};


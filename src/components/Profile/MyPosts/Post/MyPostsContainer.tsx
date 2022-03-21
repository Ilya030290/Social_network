import React from "react";
import MyPosts from "../MyPosts";
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profileReducer";
import {StoreContext} from "../../../../StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostCreator())
                }

                const onPostChange = (text: string) => {
                    let action = updateNewPostTextCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts
                    newPostText={state.profilePage.newPostText}
                    posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                />
            }
        }
        </StoreContext.Consumer>
    );
};


import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {ActionsTypes} from "../../redux/profileReducer";


type ProfilePropsType = {
    profilePage: {
        posts: Array<PostPropsType>,
        newPostText: string
    },
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText} />
        </div>
    );
};

export default Profile;
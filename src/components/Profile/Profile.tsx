import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {ActionType} from "../../redux/state";

type ProfilePropsType = {
    state: {
        posts: Array<PostPropsType>,
        newPostText: string
    },
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}/>
        </div>
    );
};

export default Profile;
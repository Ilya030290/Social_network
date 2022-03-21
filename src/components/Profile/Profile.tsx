import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {ActionsTypes} from "../../redux/profileReducer";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";


type ProfilePropsType = {
    store: ReduxStoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;
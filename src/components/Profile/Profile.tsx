import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "./ProfileContainer";


type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {
        return (
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
                <MyPostsContainer />
            </div>
        );
};


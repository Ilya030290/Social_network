import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";
import {UserProfileType} from "../ProfileContainer";
import UserPhoto from '../../../assets/images/user.png';
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : UserPhoto} alt={'ava'}/>
                <div className={s.description}>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                    <div>My contacts</div>
                    <div>github: {props.profile.contacts.github}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>youtube: {props.profile.contacts.youtube}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <ProfileStatus profileStatus={props.status} updateUserProfileStatus={props.updateUserStatus}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
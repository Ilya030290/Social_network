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

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.img_content}
                     src={'https://images.wallpaperscraft.ru/image/single/krasivyj_pejzazh_gory_ozero_priroda_93318_1600x900.jpg'}
                     alt={'img_content'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : UserPhoto} alt={'ava'}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>My contacts</div>
                <div>github: {props.profile.contacts.github}</div>
                <div>instagram: {props.profile.contacts.instagram}</div>
                <div>youtube: {props.profile.contacts.youtube}</div>
                <div>vk: {props.profile.contacts.vk}</div>
            </div>
            <div>
                <ProfileStatus profileStatus={props.status} updateUserProfileStatus={props.updateUserStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
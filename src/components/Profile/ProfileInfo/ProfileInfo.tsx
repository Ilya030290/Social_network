import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader/Preloader";
import {UserProfileType} from "../ProfileContainer";
import UserPhoto from '../../../assets/images/user.png';

type ProfileInfoPropsType = {
    profile: UserProfileType
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
                <div>Ищу новую работу: {props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
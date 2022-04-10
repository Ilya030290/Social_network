import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";


export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string | null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string | null
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

type MapStateToPropsType = {
    profile: UserProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfileContainerComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainerComponent extends React.Component<ProfileContainerComponentPropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerComponent)
import React, {JSXElementConstructor} from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getProfile, ProfileDataResponseType} from "../../api/api";


export type UserProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

type MapStateToPropsType = {
    profile: UserProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

export type ProfileContainerComponentPropsType = MapStateToPropsType & MapDispatchToPropsType;

export class ProfileContainerComponent extends React.Component<ProfileContainerComponentPropsType> {

    componentDidMount() {

        //@ts-ignore
        let userId = this.props.router.params.userId;

        getProfile(userId)
            .then((data: ProfileDataResponseType) => {
                this.props.setUserProfile(data);
            });
    }

    render() {

        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

//Оболочка для классовой компоненты, чтоб не откатыватся на 5 версию router-dom
export const WithRouter = (Component:JSXElementConstructor<any>):JSXElementConstructor<any>=> {
    function WithRouterPropComponent(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return WithRouterPropComponent;
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithRouter(ProfileContainerComponent))
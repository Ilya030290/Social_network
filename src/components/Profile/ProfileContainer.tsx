import React, {JSXElementConstructor} from 'react';
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Navigate} from "react-router-dom";


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
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number | undefined) => void
}

export type ProfileContainerComponentPropsType = MapStateToPropsType & MapDispatchToPropsType;

export class ProfileContainerComponent extends React.Component<ProfileContainerComponentPropsType> {

    componentDidMount() {

        //@ts-ignore
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
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

export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithRouter(ProfileContainerComponent))
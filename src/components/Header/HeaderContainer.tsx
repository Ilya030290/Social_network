import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {AuthResponseType, getAuth} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

type HeaderContainerComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainerComponent extends React.Component<HeaderContainerComponentPropsType> {

    componentDidMount() {
            getAuth()
            .then((data: AuthResponseType) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render () {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export const HeaderContainer = connect(mapStateToProps,{setAuthUserData})(HeaderContainerComponent);
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    unFollow,
    UserType,
    toggleFollowingInProgress,
    getUsersThunk,
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";






type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void,
    getUsersThunk: (currentPage: number, pageSize: number) => void
}

export type UsersContainerComponentPropsType = MapStateToPropsType & MapDispatchToPropsType


export class UsersContainerComponent extends React.Component<UsersContainerComponentPropsType> {

    componentDidMount() {

    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunk(pageNumber, this.props.pageSize);

    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, toggleFollowingInProgress, getUsersThunk})(UsersContainerComponent);


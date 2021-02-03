import {connect} from "react-redux";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage, unfollow,
    unfollowSuccess,
    UsersDataType
} from "../../redux/UsersReducer";
import {rootReducer} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

type UsersAPIComponentPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void

    isFetching: boolean

    follow: (userdID: string) => void
    unfollow: (userdID: string) => void
    followingInProgress: Array<any>

    usersData: Array<UsersDataType>
    getUsers: (currentPage: number, pageSize: number) => void

}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, rootReducer> {

    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render () {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersData={this.props.usersData}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: rootReducer) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
    getUsers
    }
)(UsersAPIComponent)
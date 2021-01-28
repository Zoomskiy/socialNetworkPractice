import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UsersDataType
} from "../../redux/UsersReducer";
import {rootReducer} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type UsersAPIComponentPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void

    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void

    follow: (userdID: string) => void
    unfollow: (userdID: string) => void
    toggleFollowingProgress: (isFetcing: boolean, userId: string) => void
    followingInProgress: Array<any>

    usersData: Array<UsersDataType>
    setUsers: (usersData: Array<UsersDataType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, rootReducer> {

    componentDidMount () {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    toggleFollowingProgress
    }
)(UsersAPIComponent)
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    unfollow,
    UsersDataType
} from "../../redux/UsersReducer";
import {rootReducer} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../redux/users-selectors";

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

// const mapStateToProps = (state: rootReducer) => {
//     return {
//         usersData: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
const mapStateToProps = (state: rootReducer) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export default compose<React.ComponentType>(
connect(mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            getUsers: requestUsers
        }
    )
)(UsersAPIComponent)
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UsersDataType
} from "../../redux/UsersReducer";
import {rootReducer} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Dispatch} from "redux";
import preLoader from  "./../../assets/images/preLoader.svg"
import {Preloader} from "../../common/preloader/Preloader";

type UsersAPIComponentPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void

    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void

    follow: (userdID: string) => void
    unfollow: (userdID: string) => void

    usersData: Array<UsersDataType>
    setUsers: (usersData: Array<UsersDataType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, rootReducer> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersData={this.props.usersData}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}

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
        isFetching: state.usersPage.isFetching
    }
}



const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (usersData: Array<UsersDataType>) => {
            dispatch(setUsersAC(usersData))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
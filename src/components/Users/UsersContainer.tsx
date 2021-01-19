import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, UsersDataType} from "../../redux/UsersReducer";
import Users from "./UsersC";

const mapStateToProps = (state: any) => {
    return {
        usersData: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch: any) => {
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
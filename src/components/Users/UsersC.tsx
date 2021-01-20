import React from "react";
import styles from "./users.module.css"
import {UsersDataType} from "../../redux/UsersReducer";
import userPhoto from "../../assets/images/user.png"
import axios from "axios";
import {rootReducer} from "../../redux/redux-store";

class Users extends React.Component<any, rootReducer> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber  : number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let pagesCount: number = Math.ceil (this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>

                    {pages.map(it => {
                        return  <span onClick={() => {this.onPageChanged(it) }} className={this.props.currentPage === it ? styles.selectedPage :""}>{it}</span>
                    })}
                </div>

                {this.props.usersData.map((el: UsersDataType) => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : userPhoto} alt={"user Avatar"}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            this.props.unfollow(el.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(el.id)
                        }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>

        )
    }
}

export default Users
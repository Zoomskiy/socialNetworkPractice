import React from "react";
import styles from "./users.module.css";
import {UsersDataType} from "../../redux/UsersReducer";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number

    usersData: Array<UsersDataType>

    onPageChanged: (pageNumber: number) => void
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    followingInProgress: Array<string>
}

export let Users = React.memo((props: UsersPropsType) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>

                {pages.map(it => {
                    return <span onClick={() => {
                        props.onPageChanged(it)
                    }}
                                 className={props.currentPage === it ? styles.selectedPage : ""}>{it}</span>
                })}
            </div>

            {props.usersData.map((el: UsersDataType) => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={"/Profile/" + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto} alt={"user Avatar"}
                                 className={styles.userPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {el.followed ?
                            <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.follow(el.id)
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
})
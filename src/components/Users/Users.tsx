import React from "react";
import styles from "./users.module.css";
import {UsersDataType} from "../../redux/UsersReducer";
import userPhoto from "../../assets/images/user.png";

export let Users = (props: any) => {
    let pagesCount: number = Math.ceil (props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>

                {pages.map(it => {
                    return  <span onClick={() => {props.onPageChanged(it) }} className={props.currentPage === it ? styles.selectedPage :""}>{it}</span>
                })}
            </div>

            {props.usersData.map((el: UsersDataType) => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : userPhoto} alt={"user Avatar"}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button> : <button onClick={() => {
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
}
import React from "react";
import styles from "./users.module.css"
import {UsersDataType} from "../../redux/UsersReducer";
import userPhoto from "../../assets/images/user.png"
import axios from "axios";

export let Users = (props: any) => {
    let getUsers = () => {
        if (props.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
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
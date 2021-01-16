import React from "react";
import styles from "./users.module.css"
import {UsersDataType} from "../../redux/UsersReducer";
import {v1} from "uuid";

export const Users = (props: any) => {
    if(props.usersData.length === 0) {
        props.setUsers( [
            {id: v1(), photo: "https://images11.cosmopolitan.ru/upload/img_cache/8a7/8a7af42c161c48302e6f784e6d401730_ce_649x407x0x0_cropped_666x444.webp",
                followed: true, fullName: "Alex", status: "Look for job", location: {country: "Russia", city: "Moscow"}},
            {id: v1(), photo: "https://images11.cosmopolitan.ru/upload/img_cache/8a7/8a7af42c161c48302e6f784e6d401730_ce_649x407x0x0_cropped_666x444.webp",
                followed: false, fullName: "Mitch", status: "Find the job", location: {country: "USA", city: "LA"}},
            {id: v1(), photo: "https://images11.cosmopolitan.ru/upload/img_cache/8a7/8a7af42c161c48302e6f784e6d401730_ce_649x407x0x0_cropped_666x444.webp",
                followed: false, fullName: "Otto", status: "Eat my sausage", location: {country: "Germany", city: "Leipzig"}}
        ])
    }

    return (
        <div>
            {props.usersData.map( (el: UsersDataType) => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photo} alt={"user Avatar"} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {props.unfollow(el.id) } }>Unfollow</button> : <button onClick={() => {props.follow(el.id)} }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
                </div>)}
        </div>

    )
}
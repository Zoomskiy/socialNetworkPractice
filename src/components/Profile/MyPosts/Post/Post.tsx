import React from "react";
import p from "./Post.module.css"

export type PostPropsTypes = {
    id: string
    message: string
    likeCount: number
    author: string

}

function Post(props: PostPropsTypes) {
    return (
        <div className={p.item}>
            <div className={p.message}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRToP9zH8sKm66yd6dZ796IU0yR7cl0vYcbw&usqp=CAU"
                    alt=""/>
                <div className={p.message__background}>
                    <p>{props.author}</p>
                    <span>{props.message}</span>
                </div>

            </div>

            <div className={p.likes}>
                <img
                    src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-heart-icon-png-image_4183960.jpg"
                    alt=""/>
                <div className={p.likeCounter}>{props.likeCount}</div>
            </div>

        </div>
    )
}

export default Post
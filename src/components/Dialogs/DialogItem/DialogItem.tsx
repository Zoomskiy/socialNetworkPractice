import React from "react";
import d from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div className={d.dialog + " " + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
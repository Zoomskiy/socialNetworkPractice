import React from "react";
import n from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to={"/Profile"} activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={"/Dialogs"} activeClassName={n.active}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={"/News"} activeClassName={n.active}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={"/Music"} activeClassName={n.active}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to={"/Settings"} activeClassName={n.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation
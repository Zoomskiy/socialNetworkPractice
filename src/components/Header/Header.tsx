import React from "react";
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props: any) {
    return (

        <header className={h.header}>
            <div>
                <img className={h.image} src="https://gtswiki.gt-beginners.net/decal/png/76/97/17/4764909565327179776_1.png" alt=""/>
                <div className={h.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
                        : <NavLink to={"/Login"}>Login</NavLink> }
                </div>
            </div>

        </header>

    )
}

export default Header














import React from "react";
import preLoader from "../../assets/images/preLoader.svg";



export const Preloader = () => {
    return (
        <div>
            <img alt={"loader"} src={preLoader}/>
        </div>
    )
}
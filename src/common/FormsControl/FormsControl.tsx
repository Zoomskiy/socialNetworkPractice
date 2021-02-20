import React from "react";
import t from "./FormsControl.module.css"


export const TextArea = ({input, meta, ...props}: any) => {
    return (
        <div className={t.formControl + " " + t.error}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>"some error"</span>
        </div>
    )
}
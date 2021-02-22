import React from "react";
import t from "./FormsControl.module.css"

const FormControl = ({input, meta, child, ...props}: any) => {
    const harError = meta.touched && meta.error
    return (
        <div className={t.formControl + " " + (harError ? t.error : "")}>
            <div>
                {props.children}
            </div>
            { harError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props:any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}
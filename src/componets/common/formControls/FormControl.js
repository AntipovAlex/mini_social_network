import React from "react";
import style from "./FormControl.module.css";

export const Textarea = ({input, meta, ...props}) => {

    const showError = meta.touched && meta.error

    return(
        <div className={style.formControl + " " + (showError ? style.error : "")}>
            <textarea {...input} {...props} />
            <div className={style.formControl}>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const showError = meta.touched && meta.error

    return(
        <div className={style.formControl + " " + (showError ? style.error : "")}>
            <input {...input} {...props} />
            <div className={style.formControl}>
                {showError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
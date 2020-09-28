import React from "react"
import styles from './FormControls.module.css'

type TextareaPropsType = {
    input: any,
    meta: any,
    placeholder: string
}

export const Textarea: React.FC<TextareaPropsType> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

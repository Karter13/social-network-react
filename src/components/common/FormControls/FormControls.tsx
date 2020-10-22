import React from 'react'
import styles from './FormControls.module.css'

type CommonPropsType = {
    input: any
    meta: any
    placeholder: string
    child: any
}

export const FormControl: React.FC<CommonPropsType> = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};


export const Textarea: React.FC<CommonPropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
};

export const Input: React.FC<CommonPropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/> </FormControl>
};


import React from 'react'
import styles from './FormControls.module.css'
import {required} from '../../../utils/validators/validators';
import {Field} from 'redux-form';

type CommonPropsType = {
    input: any
    meta: any
    placeholder: string
    child: any
}

export const FormControl: React.FC<CommonPropsType> = ({input, meta: {touched, error}, children}) => {
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

export const createField = (placeholder: string | null, name: string, validators: any, component: any, props?: any, text: string = '' ) => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>

);

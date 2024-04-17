import styles from "./styles.module.scss"
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

//...rest serve para pegar todas as propriedas de quem vai utilizar esse input
//isso é feito para deixar cada input personalizavél, pois ao reutilizar um deles ele ficaria igual em todas as partes do codigo
export function Input({...rest}: InputProps) {
    return(
        <input className={styles.input} {...rest}/> //repassamos a propriedades aqui
    )
}

export function TextArea({...rest}: TextAreaProps) {
    return(
        <textarea className={styles.input} {...rest}/>
    )
}
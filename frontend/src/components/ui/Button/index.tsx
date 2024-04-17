import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa' // icone animado de loading

//ButtonHTMLAttributes, serve para dizer que esse ButtonProps também é um button do HTML
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode,//conteúdo dentro de um componente, nesse caso o texto "Acessar". 
  //reactnode é para pegar o tipo do children
}

export function Button({ loading, children, ...rest }: ButtonProps){
  return(
    <button 
    className={styles.button}
    disabled={loading}
    {...rest}
    >{/*acessa a propriedade loading, qunado ela estiver true, executa spinner, e quando estiver false tira a animação de loading */}
      { loading ? (
        <FaSpinner color="#FFF" size={16} />
      ) : (
        <a className={styles.buttonText}>
          {children}
        </a>
      )}
    </button>
  )
}
import styles from './button.module.css'

import { IButtonProps } from 'src/components/UI/Button/button.props.ts'

function Button({ handler, title, className, ...props }: IButtonProps) {
  return (
    <>
      <button
        className={`${styles.btn} ${
          props.disabled ? styles.disabled : ''
        } ${className}`}
        onClick={handler}
        {...props}
      >
        {title}
      </button>
    </>
  )
}

export default Button

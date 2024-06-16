import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children:ReactNode
  onClick: () => void
}

const Button: FC <ButtonProps> = ({children, onClick}) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <button >{children}</button>
    </div>
  )
}

export { Button }
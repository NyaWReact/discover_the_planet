import clsx from 'clsx';
import styles from './SearchMenu.module.scss'

import React, { useEffect, useState } from 'react';

interface AppearProps {
  time: number
  children: React.ReactNode
  isAnimation: boolean
}


const Appear: React.FC<AppearProps> = ({time, children, isAnimation}) => {
  const [isAppear, setIsAppear] = useState(false)

  
  useEffect(() => {    
    if (isAnimation) {
      setTimeout(() => {
        setIsAppear(true)
      }, 700 + time)
    } else {
      setTimeout(() => {
        setIsAppear(false)

      }, time)
    }
  }, [isAnimation, time])

  return (
    <div className={clsx( styles.appear, isAppear ? styles.appear_block : styles.disappear_block)}>
      {children}
    </div> 
  )
}

export { Appear }
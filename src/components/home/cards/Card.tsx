import { useEffect, useState } from 'react'
import styles from './Cards.module.scss'
import clsx from 'clsx'

const Card = ({time}) => {
  const [isAppear, setIsAppear] = useState(false)

  useEffect (() => {
    setTimeout(() => {
      setIsAppear(true)
    }, 200 + time)
  }, [time])

  return (
    <div className={clsx(styles.card, isAppear && styles.appear)}>
      <img src="/country/Yokohama.png" alt="" />
      <div className={styles.bg}>
        <p className={styles.name}>Yokohama</p>
      </div>
    </div>
  )
}
export { Card }
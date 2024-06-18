import styles from './Cards.module.scss'

import { Card } from './Card'
const Cards = () => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Routes</h2>
        <div className={styles.cards}>
          <Card time={200}/>
          <Card time={300}/>
          <Card time={400}/>
          <Card time={500}/>
        </div>
      </div>
    </div>
  )
}

export { Cards }
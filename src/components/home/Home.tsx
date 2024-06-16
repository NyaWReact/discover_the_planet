import { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { Button } from '../../ui/button/Button'
import { SearchMenu } from './searchMenu/SearchMenu'

const Home = () => {
  const [count, setCount] = useState(1)
  const [isShow, setIsShow] = useState(false)
  const [isAnimation, setIsAnimation] = useState(false)

  // change bg
  useEffect (() => {
    const int = setInterval(() => {
      setCount(count + 1)
      if ( count + 1 > 4) {
        setCount(1)
      }
      
    clearInterval(int)
    }, 5000, [])
  }, [count])

  
  console.log(123);
  
  const toggleShow = () => {
    
    if (isShow) { //close
      console.log('close');
      setIsAnimation(false)
      setTimeout (() => {
        setIsShow(false)
      }, 1700)
    } else { //open
      console.log('open');
      setIsShow(true) 
      setIsAnimation(true)

    }
  }

  
  
  return (
    <>
      <div className={styles.overlay} /> 
      <div className={styles.content}>
        <div className={styles.first_string}>
          <p className={styles.discover}>Discover</p>
          <p className={styles.the}>the</p>
        </div>
        <h1>PLANET</h1>
        <Button onClick={toggleShow}> TO BEGIN</Button>
        
        <SearchMenu isShow={isShow} isAnimation={isAnimation}/>
      </div>
      <video src={`/videoBG/${count}.mp4`} autoPlay muted loop className={styles.video} />
    </>
  )
}
export { Home } 
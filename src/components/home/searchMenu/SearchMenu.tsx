import { Appear } from './Appear'
import styles from './SearchMenu.module.scss'
import { IoIosArrowDown } from "react-icons/io";
import clsx from 'clsx'
import { HiOutlineMapPin, HiOutlineKey } from "react-icons/hi2";
import React, { memo, useState } from 'react';
import { Button } from '../../../ui/button/Button';
import { LocationList } from './locationList/LocationList'
import { LevelList } from './levelList/LevelList'

interface SearchMenuProps{
  isAnimation: boolean
  isShow: boolean
}


const SearchMenu: React.FC<SearchMenuProps>  = memo(({isAnimation, isShow}) => {
  const [isLocation, setIsLocation] = useState(false)
  const [LocationValue, setLocationValue] = useState('Location')
  const [isLevel, setIsLevel] = useState(false)
  const [levelValue, setLevelValue] = useState('Route level')
  console.log(5%2);
  
  return (
    <>
      {isShow && <form className={clsx(styles.search_menu, isAnimation ? styles.search_open : styles.search_close)}>
      <Appear time={300}  isAnimation={isAnimation}>
        <HiOutlineMapPin />
        <input value={LocationValue} className={styles.choice}></input>
        {isLocation && <LocationList setLocationValue={setLocationValue} setIsLocation={setIsLocation}/> }
      </Appear>
      <Appear time={400}  isAnimation={isAnimation}>
        <div className={styles.down} onClick={() => {setIsLocation(!isLocation)}}>
          <IoIosArrowDown/>
        </div>
      </Appear>
      <Appear time={500}  isAnimation={isAnimation}>
        <HiOutlineKey />
        <input value={levelValue} className={styles.choice}></input>
        {isLevel && <LevelList setLevelValue={setLevelValue} setIsLevel={setIsLevel}/> }
      </Appear>
      <Appear time={600}  isAnimation={isAnimation}>
        <div className={styles.down} onClick={() => {setIsLevel(!isLevel)}}>
          <IoIosArrowDown/>
        </div>
      </Appear>
      <Appear time={600} isAnimation={isAnimation}>
        <label >Single</label>
        <input type="radio" name='count' className={styles.radio}/>
      </Appear>
      <Appear time={700} isAnimation={isAnimation}>
        <label >With guide</label>
        <input type="radio" name='count' className={styles.radio}/>
      </Appear>
      <Appear time={800} isAnimation={isAnimation}>
        <Button onClick={() => {}}>SEArch</Button>
      </Appear>
      </form>} 
    
    </>
  )
})

export { SearchMenu }
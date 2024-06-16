import styles from './Header.module.scss'

import { AiOutlineHome } from "react-icons/ai";
import { RiMenuFold2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src="logo.png" alt="" />
      </div>
      <div className={styles.menu}>
        <div className={styles.first_logo}><AiOutlineHome/></div>
          <p>About us</p>
          <p>Search</p>
          <p>Routes</p>
        <div className={styles.last_logo}><RiMenuFold2Fill/></div>
      </div>
    </header>
  )
}

export {Header}
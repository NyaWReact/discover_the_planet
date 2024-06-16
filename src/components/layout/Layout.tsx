import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

import { Header } from "./header/Header"

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header/>
      <Outlet></Outlet>
    </div>
  )
}
export { Layout }
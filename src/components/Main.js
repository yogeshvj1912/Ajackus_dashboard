import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Main.module.css'
import Header from './header/Header'
import UserList from './pages/UserList'



function Main() {
  return (
    <div className={styles.container}>
    <Header/>
  <Outlet>
<UserList/>
  </Outlet>
</div>
  )
}

export default Main

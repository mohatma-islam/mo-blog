import React from 'react'
import style from './page.module.css'

function Layout({children}) {
  return (
    <div>
        <h1 className={style.mainTitle}>Our works</h1>
        {children}
    </div>
  )
}

export default Layout
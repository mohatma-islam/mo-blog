"use client"

import React from 'react'
import style from "./page.module.css";
import { signIn } from 'next-auth/react';
const Login = () => {
  return (
    <div className={style.container}>
      <button onClick={()=> signIn("goggle")}>Login with Google</button>
    </div>
  )
}

export default Login;
import React from 'react'
import {Appname} from '../components/appname'
import {Logincard} from '../components/logincard'
export const Login = () => {
  return (
    <div className="flex justify-center m-0 h-screen  bg-purple-500 ">
      <Appname/>
      <Logincard/>
    </div>
  )
}

import React from 'react'
import headerLayout from './header'
import footerLayout from './footer'

const mainLayout = (props) => {
  return (

    <>
        {headerLayout}
        {props.children}
        {footerLayout}
    </>
  )
}

export default mainLayout
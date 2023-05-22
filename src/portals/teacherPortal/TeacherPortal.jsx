import React from 'react'
import {Navbar, SideNav, Main} from '../../layouts'
import './TeacherPortal.css'

const TeacherPortal = () => {
  return (
    <div>
         <Navbar />
     <div className='d-flex'>
     <SideNav />
     <Main />
    </div>
    </div>

  )
}

export default TeacherPortal
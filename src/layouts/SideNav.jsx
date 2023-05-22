import React from 'react'
// import {SideNavItems} from "./index"
import {branches} from "./index"

const SideNav = () => {
  return (
    <div style={{width: "10rem", height: "100vh", backgroundColor: "#c0c0c0"}} className='d-flex flex-column justify-content-start'>
      <ul className='list-unstyled'>
        <li style={{ cursor: "pointer"}} className='border-bottom p-2 ml-2'>
          My profile
          {/* <ul className='list-unstyled'>
            <DropdownItem text= {"BTech"}/>
          </ul> */}
        </li>
        <li style={{ cursor: "pointer"}} className='border-bottom p-2 ml-2'>Student details</li>
      
        <li style={{ cursor: "pointer"}} className='border-bottom p-2 ml-2'>Upload Mark</li>
        <li style={{ cursor: "pointer"}} className='border-bottom p-2 ml-2'>Log out</li>
      </ul>
    </div>
  )
}

function DropdownItem(props){
  return(
    <li style={{cursor:"pointer"}} className='dropdownItem'>
        {props.text}
    </li>
  )
}

export default SideNav
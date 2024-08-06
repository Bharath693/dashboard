import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { HeaderIcons } from "../../data/data";
import { FaFan } from "react-icons/fa";

import Avatar from '@mui/material/Avatar';

//css
import "./Header.scss";

const Header = () => {
  return (
    <div className='Header row'>
        <div className='Header-SearchbarMain col-lg-6 col-md-6 col-sm-6 col-12'>
            <div className='Header-leftIcon'><FaFan /></div>
            <div className='Header-SearchbarMain-Input'>
                <IoIosSearch />
                <input className='Input' placeholder='search'/>
            </div>
        </div>
        <div className='HeaderProfileMain col-lg-6 col-md-6 col-sm-6 col-12'>
            {HeaderIcons && HeaderIcons.map((item,index) =>{
              return(
               <div className='Header-RightIcons' key={index}>{item.icon}</div>
              )
            })}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
    </div>
  )
}

export default Header

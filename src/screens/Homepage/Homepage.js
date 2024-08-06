import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className='Homepage'>
     <div className='Homepage-header'>
        <Header />
     </div>
     <div className='Homepage-Main'>
       <div className='Homepage-main-sidebar'>
         <Sidebar />
       </div>
       <div className='Homepage-dashboard'>
        <Dashboard />
       </div>
     </div>
    </div>
  )
}

export default Homepage

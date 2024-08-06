import React from 'react'

import { dashboardFavouritesData } from "../../../data/data"

import "./DashboardFavourite.scss";

const DashboardFavourite = () => {
  return (
    <div className='DashboardFavourite'>
       {dashboardFavouritesData && dashboardFavouritesData.map((item) =>{
        return(
          <div className='DashboardFavourite-main'>
             <div className='DashboardFavourite-main-iconMain'>
               <div style={{color:item.color, backgroundColor:item.backgroundColor}} className='DashboardFavourite-main-icon'>
                {item.icon}
               </div>
               <span className='DashboardFavourite-main-icon-label'>{item.label}</span>
             </div>
             <div className='DashboardFavourite-main-arrow'>
             {item.ArrowIcon}
             </div>
          </div>
        )
       })}
    </div>
  )
}

export default DashboardFavourite

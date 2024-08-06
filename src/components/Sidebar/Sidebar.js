import React from 'react'
import { SidebarData} from "../../data/data";

//scss
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {SidebarData && SidebarData.map((item,index) =>{
        return(
          <div className={`Sidebar-icomMenu`}>
            {item.icon}
          </div>
        )
      })}
    </div>
  )
}

export default Sidebar

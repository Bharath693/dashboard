import React from 'react';

//component
import DashboardOrderDetails from './DashboardOrderDetails/DashboardOrderDetails';
import DashboardActvity from './DashboardActivity/DashboardActvity';
import DashboardOrders from './DashboardOrders/DashboardOrders';

//scss
import "./DashboardLeft.scss";




const DashboardLeft = () => {
  return (
    <div className='Dashboardleft row'>
       <DashboardOrderDetails />
       <DashboardActvity />
       <DashboardOrders />
    </div>
  )
}

export default DashboardLeft

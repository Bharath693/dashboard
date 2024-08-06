import React from 'react';

import { dashboardRecentOrders } from "../../../data/data"

//scss
import "./DashboardOrders.scss";

const DashboardOrders = () => {
  return (
    <div className='DashboardOrders'>
      <h5 className='DashboardOrders-heading'>Recent Orders</h5>
      <table className='DashboardOrders--table'>
         <thead className='DashboardOrders--table-header'>
          <tr>
            <td className='tableHeader'>Customer</td>
            <td className='tableHeader'>Order No.</td>
            <td className='tableHeader'>Amount</td>
            <td className='tableHeader'>Status</td>
          </tr>
         </thead>
         <tbody>
            {dashboardRecentOrders && dashboardRecentOrders.map((item,index) =>{
              return(
                <tr className='DashboardOrders-table-row applyRowStyles'key={index}>
                  <td className='tableData DashboardOrders-table-avator'>
                    {item.Avator}
                    <span className='DashboardOrders-table-avator-profileName'>{item.Name}</span>
                  </td>
                  <td className='tableData'>{item['Order No.']}</td>
                  <td className='tableData'>{item.Amount}</td>
                  <td className={`tableData`}>
                    <span className={`statuslabel ${item.Status !== "Delivered" ? "cancelledLabel":"orderDelevered"}`}>
                      {item.Status}
                    </span>
                  </td>
                </tr>
              )
            })}
         </tbody>
      </table>
    </div>
  )
}

export default DashboardOrders

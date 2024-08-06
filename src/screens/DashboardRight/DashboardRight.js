import React from 'react'
import DashboardProfit from './DashboardProfit/DashboardProfit'
import DashboardFavourite from './DashboardFavourite/DashboardFavourite'
import DashboardCustomerFeedback from './DashboardCustomerFeedback/DashboardCustomerFeedback'

const DashboardRight = () => {
  return (
    <div>
       <DashboardProfit />
       <DashboardFavourite />
       <DashboardCustomerFeedback />
    </div>
  )
}

export default DashboardRight

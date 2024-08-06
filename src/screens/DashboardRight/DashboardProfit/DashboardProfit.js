import React from 'react';
import { MdArrowDropUp } from "react-icons/md";

//package
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import "./DashboardProfit.scss";

const DashboardProfit = () => {
  return (
    <div className='DashboardProfit'>
      <div className='DashboardProfit-netProfit col-lg-6 col-md-6 col-sm-6 col-6'>
        <p className='DashboardProfit-netProfit-label'>Net Profit</p>
        <h2 className='DashboardProfit-netProfit-price'>$6759.25</h2>
        <p className='DashboardProfit-netProfit-Icon'><MdArrowDropUp /> <span>3%</span></p>
      </div>
      <div className='DashboardProfit-Main col-lg-6 col-md-6 col-sm-6 col-6'>
        <div className='DashboardProfit--progressbar'>
           <CircularProgressbar value={66} text={`${66}%`} />
        </div>
         <p className='DashboardProfit--progressbar-label'>*The values here has been rounded off</p>
      </div>
    </div>
  )
}

export default DashboardProfit

import React from 'react';
import { FaStar } from "react-icons/fa6";

import Avatar from '@mui/material/Avatar';

import "./DashboardCustomerFeedback.scss";

const DashboardCustomerFeedback = () => {
  return (
    <div className='DashboardCustomerFeedback'>
       <h4 className='DashboardCustomerFeedback--heading'>Customer's Feedback</h4>
       <div className='AddDivider DashboardCustomerFeedback-feedback1'>
          <div className='DashboardCustomerFeedback--profile'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <p className='DashboardCustomerFeedback--profile-name'>ProfileName</p>
          </div>
          <div>
            <FaStar className='filledStar'/>
            <FaStar className='filledStar'/>
            <FaStar className='filledStar'/>
            <FaStar className='filledStar'/>
            <FaStar />
          </div>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
       </div>
       <div className='AddDivider DashboardCustomerFeedback-feedback2'>
          <div className='DashboardCustomerFeedback--profile'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <p className='DashboardCustomerFeedback--profile-name'>ProfileName</p>
          </div>
          <div>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          </div>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
       </div>
       <div className='DashboardCustomerFeedback-feedback3'>
          <div className='DashboardCustomerFeedback--profile'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <p className='DashboardCustomerFeedback--profile-name'>ProfileName</p>
          </div>
          <div>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar />
          </div>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
       </div>
    </div>
  )
}

export default DashboardCustomerFeedback
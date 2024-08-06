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
          <div className='rating'>
            <FaStar className='filledStar'/>
            <FaStar className='filledStar'/>
            <FaStar className='filledStar'/>
            <FaStar className='filledStar'/>
            <FaStar />
          </div>
          <p className="feedbackTextColor">
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.I had a burger
            over greens (gluten-free) which was also very good.They were very conscientioouns about gluten allergies.
          </p>
       </div>
       <div className='AddDivider DashboardCustomerFeedback-feedback2'>
          <div className='DashboardCustomerFeedback--profile'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <p className='DashboardCustomerFeedback--profile-name'>ProfileName</p>
          </div>
          <div className='rating'>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          </div>
          <p className='feedbackTextColor'>
            We enjoyed the Eggs benedict served on homemade focaccia bread and hot coffie. Perfect Service
          </p>
       </div>
       <div className='DashboardCustomerFeedback-feedback3'>
          <div className='DashboardCustomerFeedback--profile'>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <p className='DashboardCustomerFeedback--profile-name'>ProfileName</p>
          </div>
          <div className='rating'>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar className='filledStar'/>
          <FaStar />
          </div>
          <p className='feedbackTextColor'>
            Normally Wings are wings but theirs are lean meaty and tendy
          </p>
       </div>
    </div>
  )
}

export default DashboardCustomerFeedback
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { XAxis as RechartsXAxis } from 'recharts';

import "./DashboardActivity.scss"

const DashboardActvity = () => {

  const data = [
    { name: '5', uv: 4000, pv: 2400, amt: 2400 },
    { name: '9', uv: 3000, pv: 1398, amt: 2210 },
    { name: '11', uv: 2000, pv: 9800, amt: 2290 },
    { name: '13', uv: 2780, pv: 3908, amt: 2000 },
    { name: '15', uv: 1890, pv: 4800, amt: 2181 },
    { name: '19', uv: 2390, pv: 3800, amt: 2500 },
    { name: '21', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const XAxisWrapper = (dataKey) => {
    return <RechartsXAxis dataKey={dataKey} />;
  };

  const YAxisWrapper = (dataKey) => {
    return <RechartsXAxis dataKey={dataKey} />;
  };

  return (
    <div className='DashboardActvity'>
       <div className='DashboardActvity-heading'>
          <p className='DashboardActvity-heading-activity'>Activity</p>
          <p>Weekly</p>
       </div>
      <ResponsiveContainer width="100%" height="76%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <XAxisWrapper dataKey = 'name'/>
          <YAxis />
          {/* <Tooltip />
          <Legend /> */}
          <Bar dataKey="pv" fill="#8884d8"  />
          <Bar dataKey="uv" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardActvity

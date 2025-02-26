import React,{useEffect} from 'react'
import { BarChart, Bar, Rectangle, ResponsiveContainer, XAxis, YAxis } from 'recharts';


import "./DashboardActivity.scss";

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

  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);
  
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
          {/* <XAxisWrapper dataKey='name'/> */}
          <XAxis dataKey='name'/>
          <YAxis />
          <Bar dataKey="pv" fill="#8884d8"  />
          <Bar dataKey="uv" fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardActvity

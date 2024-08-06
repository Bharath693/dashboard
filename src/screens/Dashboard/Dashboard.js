import React from "react";
import DashboardLeft from "../DashboardLeft/DashboardLeft";
import DashboardRight from "../DashboardRight/DashboardRight";

//scss
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="Dashboard row">
       <h4 className="Dashboard-heading">Dashboard</h4>
      <div className="col-lg-7">
        <DashboardLeft />
      </div>
      <div className="col-lg-5">
        <DashboardRight />
      </div>
    </div>
  );
};

export default Dashboard;

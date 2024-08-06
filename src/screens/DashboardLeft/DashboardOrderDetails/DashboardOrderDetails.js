import React from "react";
import { dashboardOrderDetails } from "../../../data/data";

//scss
import "./DashboardOrderDetails.scss";

const DashboardOrderDetails = () => {
  return (
    <div className="DashboardOrderDetails">
      {dashboardOrderDetails &&
        dashboardOrderDetails.map((item,index) => {
          return (
            <div className="DashboardOrderDetails-main">
                <p
                  style={{ color: item.color, backgroundColor: item.rgba }}
                  className="DashboardOrderDetails-main-details-icon"
                >
                  {item.icon}
                  <span className="DashboardOrderDetails-main-details-icon--subIcon" style={{backgroundColor:item.color,}}>
                    {item.subIcon}
                  </span>
                </p>
                <p className="applyColor DashboardOrderDetails-main-details--label">
                  {item.label}
                </p>
                <div className="DashboardOrderDetails-main-Orders">
                  <div className="applyColor Dashboard-profitlossLabelPrice">{item.count}</div>
                  <div className="DashboardOrderDetails-main-OrdersMain">
                    <span className={`${index % 2 === 0 ? "applyProfit" : "applyLoss"}`}>
                      {item["profit/lossIcon"]}
                    </span>
                    <span className={`${index % 2 === 0 ? "applyProfit" : "applyLoss"}`}>{item["profit/loss"]}</span>
                  </div>
                </div>
            </div>
          );
        })}
    </div>
  );
};

export default DashboardOrderDetails;
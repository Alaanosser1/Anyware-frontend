import React from "react";
import ExamTips from "../components/ExamTips";
import Announcements from "../components/Announcements";
import Due from "../components/Due";

const Dashboard = () => {
  return (
    <div className="container w-[100%] md:w-[90%] flex flex-col m-auto ">
      <ExamTips />
      <div className="lg:flex">
        <Announcements />
        <Due />
      </div>
    </div>
  );
};

export default Dashboard;

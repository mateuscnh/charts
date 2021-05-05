import React from "react";
import ClickEvents from "../../components/Chartjs/ClickEvents";
import Crazy from "../../components/Chartjs/Crazy";
import DoughnutChart from "../../components/Chartjs/Doughnut";
import Dynamic from "../../components/Chartjs/Dynamic";
import GroupedBar from "../../components/Chartjs/GroupedBar";
import VerticalBarChart from "../../components/Chartjs/VerticalBarChart";
import Line from "../../components/Chartjs/Line";
import MultiAxisLine from "../../components/Chartjs/MultiAxisLine";
import MultiType from "../../components/Chartjs/MultiType";
import PieChart from "../../components/Chartjs/PieChart";
import Polar from "../../components/Chartjs/Polar";
import RadarChart from "../../components/Chartjs/Radar";
import ScatterChart from "../../components/Chartjs/ScatterChart";
import StackedBar from "../../components/Chartjs/StackedBar";

function Chartjs() {
  return (
    <div className="container">
      <div>
        <Line />
      </div>
      <div>
        <ClickEvents />
      </div>
      <div>
        <Crazy />
      </div>
      <div>
        <DoughnutChart />
      </div>
      <div>
        <Dynamic />
      </div>
      <div>
        <GroupedBar />
      </div>
      <div>
        <VerticalBarChart />
      </div>
      <div>
        <MultiAxisLine />
      </div>
      <div>
        <MultiType />
      </div>
      <div>
        <PieChart />
      </div>
      <div>
        <Polar />
      </div>
      <div>
        <RadarChart />
      </div>
      <div>
        <ScatterChart />
      </div>
      <div>
        <StackedBar />
      </div>
    </div>
  );
}

export default Chartjs;

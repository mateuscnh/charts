import React from "react";
import LineChart from "../../components/AntDesign/Line";
import Column from "../../components/AntDesign/Column";
import Bar from "../../components/AntDesign/Bar";

// import { Container } from './styles';

const AntDesign: React.FC = () => {
  return (
    <div className="container">
      <div>
        <LineChart />
      </div>
      <div>
        <Column />
      </div>
      <div>
        <Bar />
      </div>
    </div>
  );
};

export default AntDesign;

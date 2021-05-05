import React, { useState, useEffect } from "react";
import { Bar } from "@ant-design/charts";

const DemoBar: React.FC = () => {
  var data = [
    {
      year: "1951 年",
      value: 38,
    },
    {
      year: "1952 年",
      value: 52,
    },
    {
      year: "1956 年",
      value: 61,
    },
    {
      year: "1957 年",
      value: 145,
    },
    {
      year: "1958 年",
      value: 48,
    },
  ];
  var config = {
    data: data,
    xField: "value",
    yField: "year",
    seriesField: "year",
  };
  return <Bar {...config} />;
};

export default DemoBar;

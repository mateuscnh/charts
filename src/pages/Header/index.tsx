import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/ant-design/">
        <button>Ant-design</button>
      </Link>
      <Link to="/chartjs/">
        <button>Chartjs</button>
      </Link>
    </header>
  );
};

export default Header;

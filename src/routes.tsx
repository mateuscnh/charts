import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AntDesign from "./pages/AntDesign";

import Chartjs from "./pages/Chartjs";
import Header from "./pages/Header";

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/ant-design/" exact component={AntDesign} />
        <Route path="/chartjs/" exact component={Chartjs} />
      </Switch>
    </Router>
  );
}

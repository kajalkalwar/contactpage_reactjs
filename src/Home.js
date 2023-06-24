import React, { Component } from "react";
import "./App.css";
import Feature from "./ContactFeature/Feature";
import Navbar from "./ContactNav/Navbar";
import Footer from "./Footer/Footer";
import WorkingTech from "./HowWork/WorkingTech";
import PowerData from "./PowerData/PowerData";
import PricingPlan from "./Pricing/PricingPlan";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PowerData />
        <Feature />
        <PricingPlan />
        <WorkingTech />
        <Footer />
      </div>
    );
  }
}
export default Home;

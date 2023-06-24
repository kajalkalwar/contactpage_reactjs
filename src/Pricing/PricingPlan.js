import React, { Component } from "react";
import PricingCard from "./PricingCard";
export default class PricingPlan extends Component {
  render() {
    return (
      <div className="py-40 relative">
        <div className="pl-20">
          <button className="bg-[#DCFCE7] text-sm text-[#22C55E] rounded-full font-medium uppercase py-0.5 px-2">
            Pricing
          </button>
          <p className="text-5xl font-bold py-6">
            Flexible pricing plan for your startup
          </p>
          <p className="text-[#556987] font-medium text-xl">
            Pricing that scales with your business immediately.
          </p>
        </div>
        <PricingCard />
      </div>
    );
  }
}

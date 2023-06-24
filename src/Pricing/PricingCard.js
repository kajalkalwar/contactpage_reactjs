import React, { Component } from "react";
import { pricingData } from "../data/data";
import IdealPeriod from "../IdealPeriod/IdealPeriod";
export default class PricingCard extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-around items-center pt-10 pb-40">
          {pricingData.map((item) => (
            <div
              className="bg-gray-100 rounded-lg w-80"
              key={item.id}
            >
              <div className="flex flex-col justify-center items-center pt-20">
                <button className="bg-[#DCFCE7] text-sm text-[#22C55E] rounded-full font-medium uppercase py-0.5 px-2">
                  {item.button}
                </button>
                <p className="text-[#22C55E] font-medium text-xl py-6">
                  {item.paln}
                </p>
                <div>
                  <span>{item.dollar}</span>
                  <span className="text-5xl font-medium">
                    {item.year}
                  </span>
                </div>
                <p className="text-[#8896AB] font-medium text-xl py-6">
                  {item.bill}
                </p>
              </div>
              <div className="pl-6">
                <div className="flex items-center py-2">
                  <span className="text-[#22C55E] pr-3">
                    {item.checkIcon}
                  </span>
                  <span className="text-[#556987] font-medium text-sm">
                    {item.list1}
                  </span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-[#22C55E] pr-3">
                    {item.checkIcon}
                  </span>
                  <span className="text-[#556987] font-medium text-sm">
                    {item.list2}
                  </span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-[#22C55E] pr-3">
                    {item.checkIcon}
                  </span>
                  <span className="text-[#556987] font-medium text-sm">
                    {item.list3}
                  </span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-[#22C55E] pr-3">
                    {item.checkIcon}
                  </span>
                  <span className="text-[#556987] font-medium text-sm">
                    {item.list4}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <button className="bg-[#22C55E] py-2 px-3 text-sm text-white rounded-lg hover:bg-sky-500 w-[100%]">
                  {item.requestBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <IdealPeriod />
      </div>
    );
  }
}

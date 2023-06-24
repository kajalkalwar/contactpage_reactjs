import React, { Component } from "react";
import { dataList } from "../data/data";
export default class PowerData extends Component {
  render() {
    return (
      <div>
        <div className="py-20">
          <div className="flex flex-col justify-center items-center">
            <button className="bg-[#DCFCE7] text-sm text-[#22C55E] rounded-full font-medium uppercase py-0.5 px-2">
              Numbers
            </button>
            <p className="font-bold text-5xl py-4">
              We believe in the power of data
            </p>
            <p className="text-[#556987] font-medium text-xl text-center">
              Flex is the only business platform that lets you run
              your business on one platform, <br /> seamlessly across
              all digital channels.
            </p>
          </div>
          <div className="flex flex-row justify-around items-center pt-20">
            {dataList.map((item) => (
              <div key={item.id}>
                <p className="text-5xl font-bold pb-4">
                  {item.dollar}
                </p>
                <p className="text-xl font-medium text-[#556987] text-center">
                  {item.month}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

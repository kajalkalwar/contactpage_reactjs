import React, { Component } from "react";
import { measureData } from "../data/data";
export default class FeatureData extends Component {
  render() {
    return (
      <div className="flex justify-around item-center py-20">
        {measureData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <div>
              <button className="bg-[#22C55E] text-white p-3 rounded">
                {item.icon}
              </button>
            </div>
            <div className="">
              <p className="font-bold text-2xl my-4 text-center">
                {item.title}
              </p>
              <p className="font-medium text-sm text-[#556987] text-center w-60">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

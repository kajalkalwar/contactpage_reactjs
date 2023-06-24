import React, { Component } from "react";
import { goodList } from "../data/data";
import JoinForm from "./JoinForm";
export default class SmallBusiness extends Component {
  render() {
    return (
      <div className="flex justify-around pt-20">
        <div>
          <button className="bg-[#22C55E] text-white rounded-full uppercase text-sm py-0.5 px-1 font-medium">
            Header
          </button>
          <p className="text-6xl font-bold pt-4">
            A small business <br /> is only as good <br /> as its
            tools.
          </p>
          <p className="text-[#556987] text-xl font-medium py-4">
            Lorem ipsum dolor sit amet, consectetur adipisng.
          </p>
          <div>
            {goodList.map((item) => (
              <div className="flex items-center py-2">
                <span className="text-[#22C55E] pr-3">
                  {item.icon}
                </span>
                <span className="text-[#556987] font-medium text-sm">
                  {item.para}
                </span>
              </div>
            ))}
          </div>
        </div>
        <JoinForm />
      </div>
    );
  }
}

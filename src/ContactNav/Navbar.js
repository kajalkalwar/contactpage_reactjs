import React, { Component } from "react";
import Group from "../Assets/Group.png";
import SmallBusiness from "./SmallBusiness";
const navData = [" Product", "Features", "Pricing", " Resources"];

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-100 pb-20">
          <div className="flex justify-between  pt-8 px-20">
            <div className="flex items-center">
              <img src={Group} alt="vector Group" />
              <div className="text-2xl font-bold ml-2">Flex</div>
            </div>
            <div>
              <div className="flex justify-center items-center">
                {navData.map((item) => (
                  <div className="pr-12 text-[#556987] text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button className="text-[#556987] text-base ">
                Log In
              </button>
              <button className="bg-[#22C55E] py-2 px-3 text-sm text-white rounded-lg hover:bg-sky-500 ml-4">
                Sign Up
              </button>
            </div>
          </div>
          <SmallBusiness />
        </div>
      </div>
    );
  }
}

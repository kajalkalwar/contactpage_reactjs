import React, { Component } from "react";
import Container from "./Container";

export default class IdealPeriod extends Component {
  render() {
    return (
      <div>
        <div
          className="flex justify-evenly items-center bg-cover bg-center bg-black absolute left-[200px] bottom-[280px]"
          style={{
            height: "289px",
            width: "1000px",
          }}
        >
          <div>
            <p className="font-bold text-[#ffffff] text-4xl">
              The fastest way from <br />
              idea to live site. Period.
            </p>
            <p className="text-[#8896AB] font-medium text-xl mt-4">
              Flex is a Small SaaS Business. Flex isn’t a <br />
              traditional company.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#22C55E] text-white rounded text-sm py-2 px-6 font-normal">
              Get Started
            </button>
            <button className="bg-white rounded text-sm py-2 px-6 font-normal ml-3">
              Learn More
            </button>
          </div>
        </div>
        <Container />
      </div>
    );
  }
}

// className="flex justify-center mt-40"

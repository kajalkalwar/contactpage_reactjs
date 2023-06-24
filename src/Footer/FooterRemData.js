import React, { Component } from "react";
import { remData } from "../data/data";
export default class FooterRemData extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="text-lg font-bold">Remaining</h1>
          {remData.map((item) => (
            <div className="py-1 text-[#556987] text-base">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

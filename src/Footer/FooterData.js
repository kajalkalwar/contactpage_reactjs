import React, { Component } from "react";
import { productData } from "../data/data";
export default class FooterData extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="text-lg font-bold">Product</h1>
          {productData.map((item) => (
            <div className="py-1 text-[#556987] text-base">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

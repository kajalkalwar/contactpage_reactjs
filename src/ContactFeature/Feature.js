import React, { Component } from "react";
import book from "../Assets/book.png";
import FeatureData from "./FeatureData";
import Frame from "../Assets/Frame.png";
import Pattern from "../Assets/Pattern.png";
export default class Feature extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-100">
          <div className="flex flex-col justify-center items-center py-20 ">
            <button className="bg-[#DCFCE7] text-sm text-[#22C55E] rounded-full font-medium uppercase py-0.5 px-2">
              Features
            </button>
            <p className="text-4xl font-bold my-4">
              Gain more insight into how people use your
            </p>
            <p className="text-[#556987] font-medium text-center mb-20">
              With our integrated CRM, project management,
              collaboration and invoicing capabilities,
              <br /> you can manage every aspect of your business in
              one secure platform.
            </p>
            <div className="relative">
              <img
                src={book}
                alt="book"
                height="556px"
                width="554px"
              />
              <img
                className="absolute top-[-40px] left-[-40px]"
                src={Frame}
                alt="Frame"
              />
              <img
                className="absolute right-[-36px] bottom-[-30px]"
                src={Pattern}
                alt="Pattern"
              />
            </div>
          </div>
          <FeatureData />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Group from "../Assets/Group.png";
import FooterData from "./FooterData";
import FooterRemData from "./FooterRemData";
export default class Footer extends Component {
  render() {
    return (
      <div className="bg-gray-100 py-40">
        <div className="flex justify-evenly">
          <div>
            <div className="flex items-center">
              <img src={Group} alt="vector Group" />
              <div className="text-2xl font-bold ml-2">Flex</div>
            </div>
            <p className="text-[#556987] text-lg font-medium py-6">
              Launch your own Software <br /> As A Service Application{" "}
              <br />
              with Flex Solutions.
            </p>
          </div>
          <FooterData />
          <FooterRemData />
          <div>
            <h1 className="text-lg font-bold">Newsletter</h1>
            <div className="flex flex-row pt-6">
              <div>
                <input
                  type="text"
                  placeholder="pat@shuffle.dev"
                  className="rounded text-sm w-56 h-11 pl-4 border-solid border-2 border-Gray/200"
                />
              </div>
              <div>
                <button className="bg-[#22C55E] text-white rounded text-sm py-3 px-6 font-normal ml-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm font-medium text-[#8896AB] pt-20">
          © 2021 Flex. All rights reserved.
        </p>
      </div>
    );
  }
}

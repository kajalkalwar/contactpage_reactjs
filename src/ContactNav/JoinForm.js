import React, { Component } from "react";
import Logo from "../Assets/Logo.png";
import FormData from "./FormData";

export default class JoinForm extends Component {
  render() {
    return (
      <div className="relative">
        <button className="bg-[#22C55E] text-white p-3 rounded-lg text-white absolute left-60 top-[-30px]">
          <img src={Logo} alt="Logo" />
        </button>
        <div
          className="bg-white w-[554px] rounded-lg p-20 "
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" }}
        >
          <FormData />
        </div>
      </div>
    );
  }
}

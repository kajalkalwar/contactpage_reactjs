import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  handleSubmit = (event) => {
    // navigate("/about", { state: this.state.data });
    this.props.history.push("/about", {
      state: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      },
    });
  };
  handleNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name: name });
  };

  handleEmailChange = (event) => {
    const email = event.target.value;
    this.setState({ email: email });
  };
  handlePhoneChange = (event) => {
    const phone = event.target.value;
    this.setState({ phone: phone });
  };
  render() {
    const { name, email, phone } = this.state;
    console.log(this.props, "props");
    return (
      <div>
        <div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-3xl">Join our community</h1>
            <h1 className="text-[#556987] font-medium text-lg py-4">
              Start your free trial
            </h1>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={this.handleNameChange}
              className="rounded text-sm w-[100%] h-11  border-solid border-2 border-Gray/200 mt-2 mb-4 pl-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={this.handleEmailChange}
              className="rounded text-sm w-[100%] h-11 border-solid border-2 border-Gray/200 mt-2 mb-4 pl-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={this.handlePhoneChange}
              className="rounded text-sm w-[100%] h-11 border-solid border-2 border-Gray/200 mt-2 mb-4 pl-4"
            />
          </div>
          <div>
            <button
              onClick={this.handleSubmit}
              className="rounded text-sm w-[100%] h-11 bg-[#22C55E] mt-6"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(FormData);

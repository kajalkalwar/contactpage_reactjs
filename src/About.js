import React from "react";

class About extends React.Component {
  render() {
    const {
      state: { name, email, phone },
    } = this.props.location.state;
    // const { name, email, phone } = location.state;
    // console.log(this.props.location.state);

    return (
      <div>
        <h1>Submitted Form Data</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";

class Email extends Component {
  aa() {
    console.log("yalniz ru sonlugu");
  }
  render() {
    return <input type="email" className="em" onChange={this.aa}></input>;
  }
}
export default Email;

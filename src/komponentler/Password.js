import React, { Component } from "react";

class Password extends Component {
  leman() {
    console.log("8 simvoldan uzun olmalidir");
  }

  render() {
    return <input type="password" className="pw" onFocus={this.leman} />;
  }
}
export default Password;

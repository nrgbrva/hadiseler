import React, { Component } from "react";
import Email from "./Email";
import Login from "./Login";
import Password from "./Password";
class UserLogin extends Component {
  render() {
    return (
      <form>
        <Email />
        <Password />
        <Login />
      </form>
    );
  }
}
export default UserLogin;

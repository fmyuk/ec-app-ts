import React, { Component } from "react";
import { UserState } from "../reducks/type/type";

export default class LoginClass extends Component<{actions: {signIn(): void}}, UserState> {
  render() {
    return (
      <div>
        <h2>ログイン</h2>
        <button onClick={() => this.props.actions.signIn()}>
          ログインする
        </button>
      </div>
    );
  }
}
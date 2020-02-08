import React from "react";
import { HelloWorld } from "./screens/HelloWorld";

export default () => (
  <>
    <h1>Welcome to React Parcel Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
    <span>asdasd</span>
    <HelloWorld dataSource={["uno", "due"]}>hello world</HelloWorld>
  </>
);

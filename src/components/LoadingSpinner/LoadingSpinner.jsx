import React from "react";
import { Spin } from "antd";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => (
  <div className={classes.content}>
    <Spin size="large"/>
  </div>
);
export default LoadingSpinner;

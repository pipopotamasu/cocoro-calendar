import React, { Component } from "react";
import DiscriptionScreen from "./DiscriptionScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const DiscriptionScreenRouter = DrawerNavigator(
  {
    Discription: { screen: DiscriptionScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default DiscriptionScreenRouter;
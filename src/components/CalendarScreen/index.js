import React, { Component } from "react";
import CalendarScreen from "./CalendarScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const CalendarScreenRouter = DrawerNavigator(
  {
    Calendar: { screen: CalendarScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default CalendarScreenRouter;
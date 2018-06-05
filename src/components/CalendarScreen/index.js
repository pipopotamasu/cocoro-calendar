import React, { Component } from "react";
import CalendarScreen from "./CalendarScreen.js";
import SideBar from "../SideBar/SideBar.js";
import Home from "../HomeScreen/HomeScreen";
import { DrawerNavigator, StackNavigator } from "react-navigation";
// const CalendarScreenRouter = DrawerNavigator(
//   {
//     Calendar: { screen: CalendarScreen }
//   },
//   {
//     contentComponent: props => <SideBar {...props} />
//   }
// );
// export default CalendarScreenRouter;
export default (DrawNav = StackNavigator({
  Calendar: { screen: CalendarScreen },
  Home: { screen: Home } // change component
}));
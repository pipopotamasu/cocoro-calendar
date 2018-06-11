import React, { Component } from "react";
import CalendarScreen from "./CalendarScreen.js";
import SideBar from "../SideBar/SideBar.js";
import Todo from "../PastScreen/PastScreen";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
  Calendar: { screen: CalendarScreen },
  Todo: { screen: Todo }
}));
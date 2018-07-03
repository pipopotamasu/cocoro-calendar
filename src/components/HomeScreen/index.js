import React, { Component } from "react";
import HomeScreen from "./HomeScreen"
import Description from "../Description"
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
  Home: { screen: HomeScreen },
  Description: { screen: Description }
}));
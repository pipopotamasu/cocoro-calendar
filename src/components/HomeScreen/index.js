import React, { Component } from "react";
import TabScreen from "../TabScreen/TabScreen.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: TabScreen }
  }
);
export default HomeScreenRouter;
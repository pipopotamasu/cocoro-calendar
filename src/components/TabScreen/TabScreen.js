import React, { Component } from "react";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import CalendarScreen from "../CalendarScreen/CalendarScreen.js";
import DiscriptionScreen from "../DiscriptionScreen/DiscriptionScreen.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Calendar: { screen: CalendarScreen },
    Discription: { screen: DiscriptionScreen }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Calendar")}>
              <Icon name="calendar" type="FontAwesome" />
              <Text>Calendar</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Discription")}>
              <Icon name="book"  type="FontAwesome" />
              <Text>Discription</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
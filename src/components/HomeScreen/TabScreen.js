import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CalendarScreen: { screen: HomeScreen },
    DiscriptionScreen: { screen: HomeScreen }
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
              onPress={() => props.navigation.navigate("HomeScreen")}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("HomeScreen")}>
              <Icon name="calendar" type="FontAwesome" />
              <Text>Calendar</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("HomeScreen")}>
              <Icon name="book"  type="FontAwesome" />
              <Text>Discription</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
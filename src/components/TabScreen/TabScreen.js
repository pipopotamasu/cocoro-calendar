import React, { Component } from "react";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import CalendarScreen from "../CalendarScreen/index.js";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { today } from '../../utill_methods'
import AppStore from '../../store/appStore'

export default (MainScreenNavigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
    Calendar: { screen: CalendarScreen }
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
              onPress={() => {
                AppStore.refreshTodos()
                props.navigation.navigate("Home")
              }}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => {
                  AppStore.refreshCalendar()
                  // go to root calendar
                  props.navigation.goBack(null)
                  props.navigation.navigate("Calendar")
                }
              }>
              <Icon name="calendar" type="FontAwesome" />
              <Text>Calendar</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
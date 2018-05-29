import React from "react";
import { Container, Content } from "native-base";
import { StyleSheet } from 'react-native';
import GlobalHeader from "../GlobalHeader";
import { Calendar } from 'react-native-calendars';
import AppStore from "../../store/appStore";

export default class CalendarScreen extends React.Component {
  componentWillMount() {
    // AppStore.registerTodosGroupByDate()
  }

  async markedColorDates () {
    const todos_group_by_day = await AppStore.fetchTodosGroupByDate()
    console.log(todos_group_by_day)
    let datesWithColor = {}
    for (let date in todos_group_by_day) {
      let progress = this.calProgress(todos_group_by_day[date])
      dateWithColor = { [date]: { color: this.calColor(progress) } }
      datesWithColor = Object.assign(datesWithColor, dateWithColor)
    }
    return datesWithColor
  }

  calProgress (todos) {
    // if(progress) return progress
    const doneCount = todos.filter((todo) => { return (todo.done) }).length
    progress = doneCount / 5
    return progress
  }

  calColor (progress) {
    switch (progress) {
      case 0:
        return 'rgb(255,255,255)'
        break;
      case 0.2:
        return 'rgb(0,256,0)'
        break;
      case 0.4:
        return 'rgb(0,220,0)'
        break;
      case 0.6:
        return 'rgb(0,190,0)'
        break;
      case 0.8:
        return 'rgb(0,160,0)'
        break;
      case 1:
        return 'rgb(0,128,0)'
        break;
    }
  }

  async render() {
    const hoge = await this.markedColorDates()
    console.log(hoge)
    return (
      <Container>
        <GlobalHeader title="Calendar" navigation={this.props.navigation}/>
        <Content padder style={styles.calendar}>
          <Calendar
            markedDates={
              hoge
            }
            markingType={'period'}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    paddingTop: 20
  }
});
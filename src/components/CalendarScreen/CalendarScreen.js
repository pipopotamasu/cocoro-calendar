import React from "react";
import { Container, Content, Spinner } from "native-base";
import { StyleSheet, View, Text } from 'react-native';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import GlobalHeader from "../GlobalHeader";
import { Calendar } from 'react-native-calendars';
import AppStore from "../../store/appStore";
import { calCalendarColor } from "../../utill_methods"

@observer export default class CalendarScreen extends React.Component {
  componentWillMount() {
    const { year, month } = AppStore.today
    AppStore.registerTodosGroupByDate(year, month)
  }

  markedColorDates (todos_group_by_day) {
    let datesWithColor = {}
    for (let date in todos_group_by_day) {
      let progress = this.calProgress(todos_group_by_day[date])
      dateWithColor = { [date]: { color: calCalendarColor(progress) } }
      datesWithColor = Object.assign(datesWithColor, dateWithColor)
    }
    return datesWithColor
  }

  calProgress (todos) {
    const doneCount = todos.filter((todo) => { return (todo.done) }).length
    progress = doneCount / 5
    return progress
  }

  render() {
    if (AppStore.is_loading) {
      return (
        <Container style={styles.loader}>
          <Spinner color='#00bfff' />
        </Container>
      )
    }
    return (
      <Container>
        <GlobalHeader title="Calendar" navigation={this.props.navigation}/>
        <Content padder style={styles.calendar}>
          <Calendar
            markedDates={
              this.markedColorDates(toJS(AppStore.todos_group_by_day))
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
  },
  loader: {
    justifyContent: 'center',
  }
});
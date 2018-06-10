import React from "react";
import { Container, Content, Spinner } from "native-base";
import { StyleSheet, View, Text } from 'react-native';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import GlobalHeader from "../GlobalHeader";
import { Calendar } from 'react-native-calendars';
import AppStore from "../../store/appStore";
import { calCalendarColor, calProgress } from "../../utill_methods"

@observer export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: AppStore.date.ymd,
    };
  }

  componentWillMount() {
    const { year, month } = AppStore.date
    AppStore.registerTodosGroupByDate(year, month)
  }

  markedColorDates (todos_group_by_day) {
    let datesWithColor = {}
    for (let date in todos_group_by_day) {
      let progress = calProgress(todos_group_by_day[date])
      dateWithColor = { [date]: { color: calCalendarColor(progress) } }
      datesWithColor = Object.assign(datesWithColor, dateWithColor)
    }
    return datesWithColor
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
        <Content padder style={styles.calendar}>
          <Calendar
            current={this.state.date}
            markedDates={
              this.markedColorDates(toJS(AppStore.todos_group_by_day))
            }
            markingType={'period'}
            onMonthChange={(date) => {
              const month = ( "0" + date.month).slice(-2)
              this.setState({
                date: `${date.year}-${month}-01`
              });
              AppStore.registerTodosGroupByDate(date.year, month)
            }}
            onDayPress={(day) => this.props.navigation.navigate("Todo")}
          />
        </Content>
      </Container>
    );
  }
}

CalendarScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <GlobalHeader title="Calendar" navigation={navigation} />
  )
});

const styles = StyleSheet.create({
  calendar: {
    paddingTop: 20
  },
  loader: {
    justifyContent: 'center',
  }
});
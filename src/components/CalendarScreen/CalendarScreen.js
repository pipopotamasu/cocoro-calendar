import React from "react";
import { Container, Content } from "native-base";
import { StyleSheet } from 'react-native';
import GlobalHeader from "../GlobalHeader";
import { Calendar } from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <Container>
        <GlobalHeader title="Calendar" navigation={this.props.navigation}/>
        <Content padder style={styles.calendar}>
          <Calendar/>
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
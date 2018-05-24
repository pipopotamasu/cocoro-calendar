import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import GlobalHeader from "../GlobalHeader";
import { Calendar } from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <Container>
        <GlobalHeader title="Calendar" navigation={this.props.navigation}/>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Container>
          <Calendar/>
        </Container>
      </Container>
    );
  }
}
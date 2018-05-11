import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import GlobalHeader from "../GlobalHeader";
export default class DiscriptionScreen extends React.Component {
  render() {
    return (
      <Container>
        <GlobalHeader title="Discription" navigation={this.props.navigation}/>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
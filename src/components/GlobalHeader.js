import React from "react";
import { StyleSheet } from 'react-native';
import { Header, Title, Left, Icon, Right, Button, Body } from "native-base";
export default GlobalHeader = (props) => {
  return (
    <Header>
      <Left>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
}

const styles = StyleSheet.create({
  calendar: {
    paddingTop: 20
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
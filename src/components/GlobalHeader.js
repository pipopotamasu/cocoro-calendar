import React from "react";
import { Header, Title, Left, Icon, Right, Button, Body } from "native-base";
export default GlobalHeader = (props) => {
  return (
    <Header>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
}
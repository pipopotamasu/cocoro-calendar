import React from "react";
import { Header, Title, Left, Icon, Right, Button, Body } from "native-base";
export default GlobalHeader = (props) => {
  console.log(props)
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => props.navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
}
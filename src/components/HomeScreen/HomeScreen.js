import React from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { observer } from 'mobx-react';
import GlobalHeader from "../GlobalHeader";
import AppStore from "../../store/appStore";

@observer export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <GlobalHeader title="Home" navigation={this.props.navigation} />
        <Content padder>
          <Card>
            <CardItem header>
              <Body style={styles.date}>
                <Text>{AppStore.today}のTODO</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    alignItems: 'center',
  }
});
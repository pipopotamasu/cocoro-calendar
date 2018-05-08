import React from "react";
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Card, CardItem, List, ListItem, CheckBox } from "native-base";
import { observer } from 'mobx-react';
import GlobalHeader from "../GlobalHeader";
import AppStore from "../../store/appStore";

@observer export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <GlobalHeader title="Home" navigation={this.props.navigation} />
        <Content padder>
          <Card style={styles.date}>
            <CardItem header>
              <Text>{AppStore.today}のTODO</Text>
            </CardItem>
          </Card>
        </Content>
        <Content>
          <List dataArray={AppStore.todos.$mobx.values}
            renderRow={(item) =>
              <ListItem>
                <CheckBox checked={item.done} />
                <Text style={styles.itemText}>{item.text}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    alignItems: 'center',
  },
  itemText: {
    paddingLeft: 10
  }
});
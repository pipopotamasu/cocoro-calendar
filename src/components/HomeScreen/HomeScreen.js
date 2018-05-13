import React from "react";
import { StyleSheet, FlatList } from 'react-native';
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
          <FlatList
            data={AppStore.todos.slice()}
            keyExtractor={( item, index ) => index.toString()}
            renderItem={({ item }) => (
              <ListItem>
                <CheckBox checked={item.done} onPress={()=>AppStore.toggleDone(item.id)}/>
                <Text style={styles.itemText}>{item.text}</Text>
              </ListItem>
            )}
          />
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
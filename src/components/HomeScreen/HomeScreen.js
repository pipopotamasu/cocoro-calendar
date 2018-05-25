import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { Container, Content, Text, Card, CardItem, List, ListItem, CheckBox } from "native-base";
import { observer } from 'mobx-react';
import GlobalHeader from "../GlobalHeader";
import AppStore from "../../store/appStore";
import * as Progress from 'react-native-progress';

@observer export default class HomeScreen extends React.Component {

  componentWillMount() {
    AppStore.registerTodos()
  }

  calColor (progress) {
    switch (progress) {
      case 0:
        return 'rgb(0,0,0)'
        break;
      case 0.2:
        return 'rgb(0,256,0)'
        break;
      case 0.4:
        return 'rgb(0,220,0)'
        break;
      case 0.6:
        return 'rgb(0,190,0)'
        break;
      case 0.8:
        return 'rgb(0,160,0)'
        break;
      case 1:
        return 'rgb(0,128,0)'
        break;
    }
  }

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
        <Container style={styles.progress}>
          <Progress.Bar
            progress={AppStore.todosProgress}
            color={this.calColor(AppStore.todosProgress)}
            width={270}
            height={15} />
        </Container>
        <Container style={styles.todoList}>
          <FlatList
            data={AppStore.todos.slice()}
            keyExtractor={( item, index ) => index.toString()}
            renderItem={({ item }) => (
              <ListItem onPress={()=>AppStore.toggleDone(item.id)}>
                <CheckBox onPress={()=>AppStore.toggleDone(item.id)} checked={item.done}/>
                <Text style={styles.itemText}>{item.text}</Text>
              </ListItem>
            )}
          />
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    alignItems: 'center',
  },
  progress: {
    alignItems: 'center',
    marginTop: -200,
  },
  todoList: {
    marginTop: -100,
  },
  itemText: {
    paddingLeft: 10
  }
});
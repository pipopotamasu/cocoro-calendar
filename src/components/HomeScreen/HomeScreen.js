import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { Container, Content, Text, Card, CardItem, List, ListItem, CheckBox } from "native-base";
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import GlobalHeader from "../GlobalHeader";
import Todos from "../Todos"
import AppStore from "../../store/appStore";
import * as Progress from 'react-native-progress';
import { calProgressColor } from "../../utill_methods"

@observer export default class HomeScreen extends React.Component {
  async componentWillMount() {
    await AppStore.registerTodos()
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Card style={styles.date}>
            <CardItem header>
              <Text>{AppStore.date.dateString}のTODO</Text>
            </CardItem>
          </Card>
        </Content>
        <Container style={styles.progress}>
          <Progress.Bar
            progress={AppStore.todosProgress}
            color={calProgressColor(AppStore.todosProgress)}
            width={270}
            height={15} />
        </Container>
        <Container style={styles.todoList}>
          <Todos todos={toJS(AppStore.todos)} navigation={this.props.navigation}/>
        </Container>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <GlobalHeader title="Home" navigation={navigation} />
  )
});

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
  }
});
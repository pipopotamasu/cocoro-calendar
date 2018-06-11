import React from "react";
import { Container, Content, Text, List, ListItem } from "native-base";
import AppStore from '../../store/appStore'

const routes = ["Home", "Calendar", "Discription"];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => {
                      if (data === 'Calendar') {
                        // go to root calendar
                        AppStore.refreshCalendar()
                        this.props.navigation.goBack(null)
                      }
                      if (data === 'Home') AppStore.refreshTodos()
                      this.props.navigation.navigate(data)
                    }
                  }>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
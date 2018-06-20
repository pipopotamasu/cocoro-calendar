import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { Text, ListItem, CheckBox, Icon } from "native-base";
import AppStore from "../store/appStore";

export default Todos = (props) => {
  return (
    <FlatList
      data={props.todos}
      keyExtractor={( item, index ) => index.toString()}
      renderItem={({ item }) => (
        <ListItem onPress={()=>AppStore.toggleDone(item.id)}>
          <CheckBox onPress={()=>AppStore.toggleDone(item.id)} checked={item.done}/>
          <Text style={styles.itemText}>{item.text}</Text>
          <Icon onPress={()=>props.navigation.navigate("Description")} style={styles.icon} type="MaterialCommunityIcons" name="comment-question-outline" />
        </ListItem>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemText: {
    paddingLeft: 10
  },
  icon: {
    paddingLeft: 250
  }
});
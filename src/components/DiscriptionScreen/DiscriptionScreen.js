import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, Picker } from "native-base";
import GlobalHeader from "../GlobalHeader";
export default class DiscriptionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }

  onValueChange(value) {
    this.setState({
      selected1: value
    });
  }

  render() {
    return (
      <Container>
        <GlobalHeader title="Discription" navigation={this.props.navigation}/>
        <Content padder>
          <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Content>
      </Container>
    );
  }
}
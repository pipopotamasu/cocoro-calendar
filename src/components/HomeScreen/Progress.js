import React, { Component } from 'react';
import { Content } from "native-base";
import * as Progress from 'react-native-progress';

export default Progress = (props) => {
  return (
    <Content>
      <Progress.Bar width={270} height={15} />
    </Content>
  );
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>Voçê tem { this.props.todos.length } todos!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Counter);
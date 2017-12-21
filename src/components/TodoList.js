/**
 * comtém vários TodoItems
 */

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return(
      <View style={{ padding: 40 }}>
        <TextInput placeholder="Digite seu todo" />
        <TouchableOpacity onPress={() => {}}>
          <Text>Adicionar novo todo</Text>
        </TouchableOpacity>

        <TodoItem title="Jesus"/>
        <TodoItem title="Deus"/>
        <TodoItem title="Pai"/>
      </View>
    );
  }
}

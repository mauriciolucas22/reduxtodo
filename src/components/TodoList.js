/**
 * comtém vários TodoItems
 */

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import TodoItem from './TodoItem';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoAction from '../actions/todos';

class TodoList extends Component {
  state = {
    newTodoText: '',
  }

  newTodo = () => {
    // add new todo (action redux)
    // limpar campo
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: '' });
  }


  render() {
    return(
      <View style={{ padding: 40 }}>
        <TextInput
          placeholder="Digite seu todo"
          value={this.state.newTodoText}
          onChangeText={(text) => { this.setState({ newTodoText: text }) }}
        />

        <TouchableOpacity onPress={this.newTodo}>
          <Text>Adicionar novo todo</Text>
        </TouchableOpacity>

        { this.props.todos.map(todo => (
          <TodoItem key={todo.id} title={todo.text} />
        )) }
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  todos: state.todos,
});

// referencia as actions como props do TodoList
const mapDispatchToProps = dispatch =>
  bindActionCreators(todoAction, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
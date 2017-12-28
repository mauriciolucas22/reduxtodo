import React, { Component } from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import TodoList from './components/TodoList';
import Counter from './components/Counter';

/* 
* Provider: todos os componentes dentro tem conhecimento do store
* e irão acessar o estado global da app
*/ 
export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <View>
          <TodoList />
          <Counter />
        </View>
      </Provider>
    );
  }
}
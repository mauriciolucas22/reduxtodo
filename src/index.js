import React, { Component } from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

/* 
* Provider: todos os componentes dentro tem conhecimento do store
* e irão acessar o estado global da app
*/ 
export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <View />
      </Provider>
    );
  }
}
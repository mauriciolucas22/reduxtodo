/**
 * sempre uma função por default
 * state: por padrão recebe o estado atual da app
 */

 export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // retorna o estado atual com novo todo em objeto com um id e text
      return [ ...state, { id: Math.random(), text: action.text } ];
    default: // retorna o estado antes desse reducer
      return state;
  }
 }
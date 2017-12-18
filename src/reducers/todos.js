/**
 * state recebe vazio por default, quando receber um state vazio
 * orque quando chama esta função
 * o state recebe o estado atual, para depois add novo todo
 */
export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, { id: Math.random(), text: action.text }];
      break;
    default:
      return state;
  }
}
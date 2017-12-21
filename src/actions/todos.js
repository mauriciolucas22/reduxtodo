/**
 * Todas as ações relacionadas com todos
 * ficam aqui!
 * 
 * Actions são várias funções
 * Toda actions sempre retorna um objeto {}
 * o objeto tem uma propriedade obrigatória type: ''
 * type é a forma do redux entender qual a ação
 * type é único para cada ação dentro do redux, é uma string
 *  em caixa alta e com anderline
 * 
 * 
 * 
 */

 export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text,
  };
 }
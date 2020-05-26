// const todos = [{
//   id: 3,
//   content: 'HTML',
//   completed: false
// },
// {
//   id: 2,
//   content: 'CSS',
//   completed: true
// },
// {
//   id: 1,
//   content: 'Javascript',
//   completed: false
// }
// ];

// function sortBy(key) {
//  return todos.slice().sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
// }

// console.log(sortBy('id'));
// /*
// [
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false }
// ]
// */
// console.log(sortBy('content'));
// /*
// [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// console.log(sortBy('completed'));
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true }
// ]
// */
let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  todos = [newTodo, ...todos];
}

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);

todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  // let num = 0;
  // todos.filter(todo => todo.completed === true ? ++num : num);
  // return num;
  return todos.filter(todo => todo.completed).length;
}

console.log(countCompletedTodos()); // 1

function getMaxId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;
}
console.log(getMaxId()); // 3 
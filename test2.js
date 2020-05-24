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

// function removeTodo(id) {
//   todos.splice(id - 1, 1);
// }

// removeTodo(2);

// console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
function countCompletedTodos() {
  // let num = 0;
  // todos.filter(todo => todo.completed === true ? ++num : num);
  // return num;
  return todos.filter(todo => todo.completed === true).length;
}

console.log(countCompletedTodos()); // 1

function getMaxId() {
  // let max = 0;
  // return todos.filter(todo => todo.id > max).length;
  return Math.max(...todos.map(todo => todo.id));
}
console.log(getMaxId()); // 3
const initialState = [{ id: 1, todo: 'Buy milk', done: false }];

const todoReducer = ( state = initialState, action ) => {
  if(action?.type === 'addTodo') {
    return [...state, action.payload];
  }
  return state;
}


let todos = todoReducer();

const newTodo = { id: 2, todo: 'Buy Bread', done: false }

const addTodoAction = {
  type: 'addTodo',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);

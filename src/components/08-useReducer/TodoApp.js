import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';
import { useForm } from '../../hooks/useForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInput, reset] = useForm({ description: '' });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'remove',
      payload: todoId,
    };
    dispatch(action);
  }

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId
    }

    dispatch(action);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App ({todos.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
                  {index + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="description"
              autoComplete="off"
              placeholder="Enter desc..."
              onChange={handleInput}
              value={description}
            />
            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

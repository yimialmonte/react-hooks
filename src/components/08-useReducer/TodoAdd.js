import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

  const [{ description }, handleInput, reset] = useForm({ description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  )
}

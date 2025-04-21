import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 My Todos</h2>
      <ul style={styles.list}>
        {todos.length === 0 ? (
          <p style={styles.empty}>No todos yet. Add one!</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <span>{todo.text}</span>
              <button
                onClick={() => {
                  console.log("Deleting:", todo.id);
                  dispatch(removeTodo(todo.id));
                }}
                style={styles.deleteBtn}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: '2rem auto',
    padding: '1rem',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '0.8rem 1rem',
    marginBottom: '0.5rem',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ddd',
  },
  deleteBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    color: '#e63946',
  },
  empty: {
    textAlign: 'center',
    color: '#777',
  },
};

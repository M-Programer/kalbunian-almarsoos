import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemove: (id: string) => void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem onRemove={props.onRemove} key={item.id} id={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;

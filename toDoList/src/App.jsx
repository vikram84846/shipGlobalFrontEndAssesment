import React, { useState } from 'react';
import '../src/App.css'

function TodoApp() {
  const [todos, setTodos] = useState({
    backlog: ['Task 1', 'Task 2','task 6'],
    todo: ['Task 3','Task 7','Task 8'],
    ongoing: ['Task 4'],
    done: ['Task 5', 'Task 9'],
  });

  const moveTodo = (task, from, to) => {
    setTodos((prevTodos) => {
      const newFromList = prevTodos[from].filter((item) => item !== task);
      const newToList = [...prevTodos[to], task];
      return {
        ...prevTodos,
        [from]: newFromList,
        [to]: newToList,
      };
    });
  };

  return (
    <div className="todo-app">
      <StatusColumn
        title="Backlog"
        todos={todos.backlog}
        onMoveRight={(task) => moveTodo(task, 'backlog', 'todo')}
        disableLeft={true}
      />
      <StatusColumn
        title="To Do"
        todos={todos.todo}
        onMoveLeft={(task) => moveTodo(task, 'todo', 'backlog')}
        onMoveRight={(task) => moveTodo(task, 'todo', 'ongoing')}
      />
      <StatusColumn
        title="Ongoing"
        todos={todos.ongoing}
        onMoveLeft={(task) => moveTodo(task, 'ongoing', 'todo')}
        onMoveRight={(task) => moveTodo(task, 'ongoing', 'done')}
      />
      <StatusColumn
        title="Done"
        todos={todos.done}
        onMoveLeft={(task) => moveTodo(task, 'done', 'ongoing')}
        disableRight={true}
      />
    </div>
  );
}

function StatusColumn({ title, todos, onMoveLeft, onMoveRight, disableLeft, disableRight }) {
  return (
    <div className="status-column">
      <h2>{title}</h2>
      <ul>
        {todos.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onMoveLeft={onMoveLeft}
            onMoveRight={onMoveRight}
            disableLeft={disableLeft}
            disableRight={disableRight}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task, onMoveLeft, onMoveRight, disableLeft, disableRight }) {
  return (
    <li className="todo-item">
      <span>{task}</span>
      <div className="nav-buttons">
        <button
          onClick={() => onMoveLeft(task)}
          disabled={disableLeft}
        >
          &larr;
        </button>
        <button
          onClick={() => onMoveRight(task)}
          disabled={disableRight}
        >
          &rarr;
        </button>
      </div>
    </li>
  );
}

export default TodoApp;
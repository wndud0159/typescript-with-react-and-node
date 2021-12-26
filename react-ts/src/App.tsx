import React, { useState } from "react";
// import { Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./TodoModel";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (todoText: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: todoText }]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}></NewTodo>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  );
}

export default App;

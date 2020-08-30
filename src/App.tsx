import React from "react";
import "./App.css";

// Components
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoAdd />
    </div>
  );
}

export default App;

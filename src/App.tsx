import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  const arrayTask = [
    { text: "buy milk", isChecked: false, id: 1 },
    { text: "buy bread", isChecked: true, id: 2 },
    { text: "sell milk", isChecked: false, id: 3 },
  ];

  return (
    <div className="App">
      <Todolist title="What to learn" arrayData={arrayTask} />
    </div>
  );
}

export default App;

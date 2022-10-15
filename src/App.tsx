import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  const [arr, setArr] = useState([
    { text: "buy milk", isChecked: false, id: 1 },
    { text: "buy bread", isChecked: true, id: 2 },
    { text: "sell milk", isChecked: false, id: 3 },
  ]);

  const allButtonHandler = () => {
    const newArr = arr.filter((item: any) => {
      return item;
    });
    setArr(newArr);
  };

  const activeButtonHandler = () => {
    const newArr = arr.filter((item: any) => {
      return item.isChecked !== true;
    });
    setArr(newArr);
  };

  const completedButtonHandler = () => {
    const newArr = arr.filter((item: any) => {
      return item.isChecked !== false;
    });
    setArr(newArr);
  };

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        arrayData={arr}
        allButtonHandler={allButtonHandler}
        activeButtonHandler={activeButtonHandler}
        completedButtonHandler={completedButtonHandler}
      />
    </div>
  );
}

export default App;

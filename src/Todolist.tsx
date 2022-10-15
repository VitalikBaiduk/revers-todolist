import React from "react";

type arrayObj = {
  text: string;
  isChecked: boolean;
  id: number;
};

type TodolistProps = {
  title: string;
  arrayData: Array<arrayObj>;
  allButtonHandler: () => void;
  activeButtonHandler: () => void;
  completedButtonHandler: () => void;
};

export const Todolist = (props: TodolistProps) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.arrayData.map((el: arrayObj, index: number) => {
          return (
            <li key={el.id}>
              <input type="checkbox" checked={el.isChecked} />
              <span>{el.text}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={props.allButtonHandler}>All</button>
        <button onClick={props.activeButtonHandler}>Active</button>
        <button onClick={props.completedButtonHandler}>Completed</button>
      </div>
    </div>
  );
};

import React from "react";

type arrayObj = {
  text: string;
  isChecked: boolean;
  id: number;
};

type TodolistProps = {
  title: string;
  arrayData: Array<arrayObj>;
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
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

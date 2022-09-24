import React from "react";

type TodolistProps = {
  title: string;
  arrData: Array<any>;
};

export const Todolist: React.FC<TodolistProps> = ({ title, arrData }) => {
  const arr = [];

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {arrData.map((item: any) => {
          return (
            <li>
              <input type="checkbox" checked={item.isDone} />
              <span>{item.title}</span>
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

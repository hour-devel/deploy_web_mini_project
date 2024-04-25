import React from "react";
import { format } from 'date-fns';

const TodoListComponent = ({ task, color }) => {
  return (
    <div
      className={
        `w-[100%] h-[120px] mt-[10px] rounded-xl relative bg-[` + color + "]"
      }
    >
      <div className="w-[95px] h-[95px] bg-white absolute left-[15px] top-[50%] translate-y-[-50%] rounded-xl text-center leading-8">
        <p className="text-red-600 text-[20px] mt-[10px]">{format(task.dueDate, 'EEE')}</p>
        <span className="text-[36px]">{format(task.dueDate, 'dd')}</span>
      </div>
      <div className="w-[300px] h-[95px] absolute left-[140px] top-[50%] translate-y-[-50%]">
        <h3 className="font-bold mt-[8px] text-[18px] leading-9">
          {task.taskTitle}
        </h3>
        <p className="text-[12px]">
          {task.description}
        </p>
      </div>
      <button className="btn w-[120px] absolute top-[50%] right-[15px] ">
        {task.status === 1
          ? "Todo"
          : task.status === 2
          ? "Working On"
          : task.status === 3
          ? "Checking"
          : task.status === 4
          ? "Completed"
          : ""}
      </button>
    </div>
  );
};

export default TodoListComponent;

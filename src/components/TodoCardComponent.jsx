"use client";

import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import { changeStatusTaskAction } from "@/actions/taskAction";
import { format } from "date-fns";
import { deleteTask } from "@/service/task.service";

export default function TodoCardComponent({ task, color }) {
  return task?.map((e) => (
    <div
      className="w-[100%] rounded-lg mt-5 relative border-2 border-[#ccc]"
      key={e.taskId}
    >
      <i
        className="fa-solid fa-xmark absolute right-[15px] top-[25px] translate-y-[-50%]"
        onClick={() => deleteTask(task.workspaceId, task.taskId)}
      ></i>
      <div className="p-5">
        <div className="flex justify-between">
          <p>{e.taskTitle}</p>
          <div className="absolute top-2 right-3">
            <EditDeleteDropDownComponent />
          </div>
        </div>

        <p className="text-gray">{e.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            Development
          </div>
          <div className={`rounded-full w-5 h-5 bg-[` + color + "]"}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-end pr-3 py-2 relative">
        {e.status === 1 ? (
          <i
            className="fa-solid fa-calendar-plus absolute left-[15px] top-[50%] translate-y-[-50%]"
            onClick={() => changeStatusTaskAction(e.status, e.taskId)}
          ></i>
        ) : e.status === 2 ? (
          <i
            className="fa-solid fa-calendar-day absolute left-[15px] top-[50%] translate-y-[-50%]"
            onClick={() => changeStatusTaskAction(e.status, e.taskId)}
          ></i>
        ) : e.status === 3 ? (
          <i
            className="fa-solid fa-calendar-week absolute left-[15px] top-[50%] translate-y-[-50%]"
            onClick={() => changeStatusTaskAction(e.status, e.taskId)}
          ></i>
        ) : e.status === 4 ? (
          <i
            className="fa-regular fa-calendar-check absolute left-[15px] top-[50%] translate-y-[-50%]"
            onClick={() => changeStatusTaskAction(e.status, e.taskId)}
          ></i>
        ) : (
          ""
        )}
        <Image
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <p className="text-gray">{format(e.dueDate, "yyyy/MM/dd")}</p>
      </div>
    </div>
  ));
}

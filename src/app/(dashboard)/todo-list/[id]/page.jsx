import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import TodoListComponent from "@/components/TodoListComponent";
import { getAllTaskService } from "@/service/task.service";
import { getWorkSpaceById } from "@/service/workspace.service";
import React from "react";

const Todo_List = async ({ params }) => {
  const todo = "#ffee93";
  const workingOn = "#306bff";
  const checking = "#ffb57f";
  const completed = "#78c552";
  const task = await getAllTaskService(params.id);
  const workSpacePath = await getWorkSpaceById(params.id);
  return (
    <>
      <div className="w-[63%] float-left mr-[2%]">
        <ListBoardComponentHeader
          favorite={workSpacePath.data}
          pathName={workSpacePath.data}
          workSpaceId={params.id}
          path = "List"
        />
        {task?.data?.map((e) =>
          e.status === 1 ? (
            <TodoListComponent task={e} color={todo} />
          ) : e.status === 2 ? (
            <TodoListComponent task={e} color={workingOn} />
          ) : e.status === 3 ? (
            <TodoListComponent task={e} color={checking} />
          ) : e.status === 4 ? (
            <TodoListComponent task={e} color={completed} />
          ) : (
            ""
          )
        )}
      </div>
      <div className="w-[35%] h-[650px] float-left mt-[10px] relative">
        <MonthlyStatisticsComponent workSpaceId={params.id} />
        <AddNewTaskComponent
          pathName={workSpacePath.data}
          workSpaceId={params.id}
        />
      </div>
    </>
  );
};

export default Todo_List;

import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllTaskServiceByStatusAndWorkSpace } from "@/service/task.service";
import { getWorkSpaceById } from "@/service/workspace.service";
import React from "react";

const page = async ({ params }) => {
  const todo_workSpace = await getAllTaskServiceByStatusAndWorkSpace(
    1,
    params.id
  );
  const workingOn_workSpace = await getAllTaskServiceByStatusAndWorkSpace(
    2,
    params.id
  );
  const checking_workSpace = await getAllTaskServiceByStatusAndWorkSpace(
    3,
    params.id
  );
  const complete_workSpace = await getAllTaskServiceByStatusAndWorkSpace(
    4,
    params.id
  );
  const todo = "#ffee93";
  const workingOn = "#306bff";
  const checking = "#ffb57f";
  const completed = "#78c552";
  const workSpacePath = await getWorkSpaceById(params.id);
  return (
    <>
      <ListBoardComponentHeader
        favorite = {workSpacePath.data}
        pathName={workSpacePath.data}
        workSpaceId={params.id}
        path = "Board"
      />
      <div className="w-[100%] h-auto flex justify-between mt-[20px] mb-[100px]">
        <div className="w-[24%] h-auto">
          <div className="w-[100%] h-[40px] relative">
            <h4 className="font-bold text-[18px]">TODO</h4>
            <div className="w-[100%] h-[2.5px] bg-[#ffee93] rounded-md absolute bottom-0"></div>
          </div>
          <div className="w-[100%]">
            <TodoCardComponent task={todo_workSpace.data} color={todo} />
          </div>
        </div>
        <div className="w-[24%] h-auto">
          <div className="w-[100%] h-[40px] relative">
            <h4 className="font-bold text-[18px]">WORKING ON</h4>
            <div className="w-[100%] h-[2.5px] bg-[#306bff] rounded-md absolute bottom-0"></div>
          </div>
          <div className="w-[100%]">
            <TodoCardComponent
              task={workingOn_workSpace.data}
              color={workingOn}
            />
          </div>
        </div>
        <div className="w-[24%] h-auto">
          <div className="w-[100%] h-[40px] relative">
            <h4 className="font-bold text-[18px]">CHECKING</h4>
            <div className="w-[100%] h-[2.5px] bg-[#ffb57f] rounded-md absolute bottom-0"></div>
          </div>
          <div className="w-[100%]">
            <TodoCardComponent
              task={checking_workSpace.data}
              color={checking}
            />
          </div>
        </div>
        <div className="w-[24%] h-auto">
          <div className="w-[100%] h-[40px] relative">
            <h4 className="font-bold text-[18px]">COMPLETE</h4>
            <div className="w-[100%] h-[2.5px] bg-[#78c552] rounded-md absolute bottom-0"></div>
          </div>
          <div className="w-[100%]">
            <TodoCardComponent
              task={complete_workSpace.data}
              color={completed}
            />
          </div>
        </div>
      </div>
      <AddNewTaskComponent pathName={workSpacePath.data} workSpaceId={params.id}/>
    </>
  );
};

export default page;

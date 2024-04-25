import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/util/constants";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const getAllTaskService = async (id) => {
  const header = await headerToken();

  const res = await fetch(`${baseUrl}/api/todo/v1/tasks?workspaceId=${id}`, {
    cache: "no-store",
    next: { tags: ["Task"] },
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const getAllTaskServiceByStatusAndWorkSpace = async (
  status,
  workSpace
) => {
  const header = await headerToken();

  const res = await fetch(
    `${baseUrl}/api/todo/v1/tasks/getTaskByStatusAndWorkspaceId/${status}/${workSpace}`,
    {
      cache: "no-store",
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

export const changeStatusTaskService = async (taskId,status) => {
  const header = await headerToken();

  const res = await fetch(
    `${baseUrl}/api/todo/v1/tasks/change-status/${taskId}`,
    {
      method:"PUT",
      body : JSON.stringify(status),
      headers: header,
    }
  );
  revalidateTag("Task");
  const data = await res.json();
  return data;
};

export const addNewTaskService = async (taskInfo) => {
  const header = await headerToken();

  const res = await fetch(`${baseUrl}/api/todo/v1/tasks`, {
    method: "POST",
    body: JSON.stringify(taskInfo),
    headers: header,
  });
  revalidateTag("Task");
  const data = await res.json();
  return data;
};

export const getStatistic = async (month, workSpaceId) => {
  const header = await headerToken();

  const res = await fetch(
    `http://110.74.194.123:8989/api/todo/v1/tasks/getTaskCountByStatus/${month}/${workSpaceId}`,
    {
      cache: "no-store",
      headers: header,
    }
  );
  revalidateTag("Task");
  const data = await res.json();
  return data;
};

export const deleteTask = async (workId,taskId) => {
  const header = await headerToken();
  
  const res = await fetch(
    `http://110.74.194.123:8989/api/todo/v1/tasks/deleteTaskByWorkspaceIdAndTaskId/${workId}/${taskId}`,
    {
      method: "DELETE",
      headers: header,
    }
  );
  revalidateTag("Task");
}

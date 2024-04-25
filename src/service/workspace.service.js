import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/util/constants";
import { revalidateTag } from "next/cache";

export const getAllWorkSpaceService = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
    next: { tags: ["WorkSpace"] },
    cache: "no-store",
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const getWorkSpaceById = async (workSpaceId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/workspace/${workSpaceId}`,
    {
      cache: "no-store",
      headers: header,
    }
  );
  const data = await res.json();
  return data;
}

export const addNewWorkSpace = async (workSpaceInfo) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
    method: "POST",
    body: JSON.stringify({
      workspaceName: workSpaceInfo.workspaceName,
    }),
    headers: header,
  });
  const data = await res.json();
  revalidateTag('WorkSpace');
  return data;
};

export const addFavoriteWorkSpace = async (workSpaceId,favorite) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/api/todo/v1/workspaces/add-to-favorite/${workSpaceId}`,
    {
      method : "PUT",
      body: JSON.stringify(favorite),
      headers: header,
    }
  );
  const data = await res.json();
  revalidateTag('WorkSpace');
  return data;
};

export const deleteWorkSpace = async (workSpaceId) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces/${workSpaceId}`, {
    method: "DELETE",
    headers: header,
  });
  revalidateTag('WorkSpace');
};

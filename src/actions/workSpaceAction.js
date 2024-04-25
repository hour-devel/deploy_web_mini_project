"use server";

import { addFavoriteWorkSpace, addNewWorkSpace, deleteWorkSpace } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

export const workSpaceAction = async (workSpaceInfo) => {
  const newWorkSpace = {
    workspaceName : workSpaceInfo.get("workspaceName"),
  };
  revalidateTag('WorkSpace');
  await addNewWorkSpace(newWorkSpace);
};

export const deleteWorkSpaceAction = async (workSpaceId) => {
  await deleteWorkSpace(workSpaceId)
};

export const addFavoriteWorkSpaceAction = async (workSpaceId) => {
  const favorite = {
    isFavorite : true
  }
  await addFavoriteWorkSpace(workSpaceId,favorite);
}
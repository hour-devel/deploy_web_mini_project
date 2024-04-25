'use server'

import { addNewTaskService, changeStatusTaskService } from "@/service/task.service";
import { revalidateTag } from "next/cache";

export const tastAction = async (taskInfo) => {
    const newTask = {
        taskTitle: taskInfo.get('title'),
        description: taskInfo.get('description'),
        startDate: new Date(),
        dueDate: taskInfo.get('dueDate'),
        tag: taskInfo.get('tag'),
        status: 1,
        workspaceId: taskInfo.get('workSpaceId'),
    };
    revalidateTag('Task');
    await addNewTaskService(newTask);
}

export const changeStatusTaskAction = async (status,taskId) => {
    let status_change;
    if(status==1){
        status_change = {
            status : 2
        }
    }else if(status==2){
        status_change = {
            status : 3
        }
    }else if(status == 3){
        status_change = {
            status : 4
        }
    }else if(status == 4){
        status_change = {
            status : 4
        }
    }
    await changeStatusTaskService(taskId,status_change)
}
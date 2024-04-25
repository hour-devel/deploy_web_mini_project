"use client";
import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkSpaceService } from "@/service/workspace.service";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarComponent({ workSpaceData }) {
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} alt=""/>
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} alt=""/>
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workSpaceData?.data?.map((e) => {
        return !e.isFavorite ? (
          <div
            className="flex items-center mt-5 w-full relative z-10"
            key={e.workSpaceId}
          >
            <div className="rounded-full w-4 h-4 bg-todo"></div>
            <Link href={`/todo-board/${e.workSpaceId}`}>
              <div className="flex justify-between w-full pl-3">
                <p>{e.workspaceName}</p>
              </div>
            </Link>
            <EditDeleteDropDownComponent workSpaceId={e.workSpaceId} />
          </div>
        ) : (
          ""
        );
      })}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>
        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} alt=""/>
      </div>

      {/* each favorite workspace */}
      {workSpaceData?.data?.map((e) => {
        return e.isFavorite ? (
          <div className="flex items-center mt-5 w-full relative" key={e.workSpaceId}>
            <div className="rounded-full w-4 h-4 bg-workingOn"></div>
            <Link href={`/todo-board/${e.workSpaceId}`}>
              <div className="flex justify-between w-full pl-3">
                <p>{e.workspaceName}</p>
              </div>
            </Link>
            <EditDeleteDropDownComponent workSpaceId={e.workSpaceId} />
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { addFavoriteWorkSpaceAction } from "@/actions/workSpaceAction";

const ListBoardComponentHeader = ({ favorite, pathName, workSpaceId,path }) => {
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5 mt-[20px]">
        <p>{favorite.isFavorite ? ("Favorite") : ("WorkSpace")}</p> / <p>{pathName.workspaceName}</p> / <p>{path}</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{pathName.workspaceName}</h2>
        {favorite.isFavorite ? (
          <div className="border border-gray rounded-lg p-2 bg-orange-500">
            <button onClick={() => addFavoriteWorkSpaceAction(workSpaceId)}>
              <i className="fa-regular fa-star text-white"></i>
            </button>
          </div>
        ) : (
          <div className="border border-gray rounded-lg p-2">
            <button onClick={() => addFavoriteWorkSpaceAction(workSpaceId)}>
              <i className="fa-regular fa-star"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ListBoardComponentHeader;

import { getStatistic } from "@/service/task.service";
import React from "react";

export default async function MonthlyStatisticsComponent({ workSpaceId }) {
  const statistic = await getStatistic(4, workSpaceId);
  console.log("qweqwebsbnmdjh", statistic);
  return (
    <div>
      <h1 className="text-xl font-bold mb-5 mt-12 text-center">
        Statistics on April
      </h1>
      {statistic?.data?.map((i) => {
        return (
          <div key={statistic}>
            {i.status === 1 ? (
              <div className="flex gap-3 items-center">
                <div className="bg-todo h-5 rounded-lg w-1"></div>
                <p>
                  Todo : <span>{i.count}</span> tasks
                </p>
              </div>
            ) : i.status === 2 ? (
              <div className="flex gap-3 items-center">
                <div className="bg-workingOn h-5 rounded-lg w-1"></div>
                <p>
                  Working On : <span>{i.count}</span> tasks
                </p>
              </div>
            ) : i.status === 3 ? (
              <div className="flex gap-3 items-center">
                <div className="bg-checking h-5 rounded-lg w-1"></div>
                <p>
                  Checking : <span>{i.count}</span> tasks
                </p>
              </div>
            ) : i.status === 4 ? (
              <div className="flex gap-3 items-center">
                <div className="bg-completed h-5 rounded-lg w-1"></div>
                <p>
                  Completed : <span>{i.count}</span> tasks
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

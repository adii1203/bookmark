"use client";

import { Card as Wrapper } from "@/components/ui/card";
import React from "react";

const Card = ({ data }: any) => {
  return (
    <div>
      <Wrapper className="flex flex-row  items-center gap-4">
        <div className="p-1 w-52 aspect-video">
          <img
            alt="Bookmark Thumbnail"
            className="rounded-md object-cover w-full h-full"
            src={data.image}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-lg font-medium">{data.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {data.description.length > 50
                ? data.description.slice(0, 50)
                : data.description}
            </p>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {data.url}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Card;

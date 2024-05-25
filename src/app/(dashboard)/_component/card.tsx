"use client";

import { Button } from "@/components/ui/button";
import { Card as Wrapper } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Card = ({ data }: any) => {
  return (
    <div>
      <Wrapper className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-1 ">
        <div className="sm:w-72 sm:h-40 w-full h-60 ">
          <img
            alt="Bookmark Thumbnail"
            className="rounded-md object-cover w-full h-full"
            src={data.image}
          />
        </div>
        <div className="flex flex-col gap-2 flex-1 h-full">
          <div>
            <div>
              <h3 className="text-lg font-medium">
                <Link href={data.url} target="_blank">
                  {data.title}
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {data.description.length > 50
                  ? data.description.slice(0, 50)
                  : data.description}
              </p>
            </div>
          </div>
          <div>
            <Button
              variant={"outline"}
              size={"icon"}
              className="w-8 h-8 rounded-full">
              <Trash2 size={18} />
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Card;
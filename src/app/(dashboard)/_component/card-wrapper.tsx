"use client";

import React from "react";
import Card from "./card";
import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "@/actions/get-bookmark";
import { BookmarkType } from "@/utils/types";
import CardLoading from "@/ui/dashboard/card-loading";

const CardWrapper = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: ["link"],
    queryFn: () => getBookmarks(),
  });

  if (isPending) {
    return <CardLoading />;
  }
  if (data)
    return (
      <div className="space-y-4 max-w-[60rem] mx-auto">
        {(data as BookmarkType[])?.map((bookmark: BookmarkType) => {
          return <Card key={bookmark.id} data={bookmark} />;
        })}
      </div>
    );
};

export default CardWrapper;

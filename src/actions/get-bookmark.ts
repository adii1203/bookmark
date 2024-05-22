"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { BookmarkType } from "@/utils/types";

export const getBookmarks = async () => {
  const session = await auth();
  if (!session) throw new Error("Unauthorized access");

  const userId = session.user?.id;
  if (!userId) {
    throw new Error("Unauthorized access");
  }

  try {
    const bookmarks = await db.query.bookmarks.findMany({
      where: (bookmark, { eq }) => eq(bookmark.userId, userId),
    });

    return bookmarks;
  } catch (error) {
    return error;
  }
};

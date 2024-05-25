"use server";

import { db } from "@/lib/db/index";
import { auth } from "@/auth";
import { bookmarks } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const deletebookmark = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Invalid bookmark id");
    }
    const session = await auth();
    if (!session) {
      throw new Error("Unauthorized access");
    }

    const userId = session.user?.id;
    if (!userId) {
      throw new Error("Unauthorized access");
    }

    const res = await db.query.bookmarks.findFirst({
      where: (bookmark, { eq, and }) => {
        return and(eq(bookmark.id, id), eq(bookmark.userId, userId));
      },
    });
    if (!res) {
      throw new Error("Bookmark not found");
    }

    await db.delete(bookmarks).where(eq(bookmarks.id, res?.id)).returning();

    return {
      message: "Bookmark deleted successfully",
    };
  } catch (error) {
    console.log(error);

    return error;
  }
};

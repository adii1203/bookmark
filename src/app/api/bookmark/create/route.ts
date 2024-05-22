import { db } from "@/lib/db";
import { NextRequest } from "next/server";
import { bookmarks } from "@/lib/db/schema";
import { bookmarkSchema } from "@/lib/zod/schema/url";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  const { link } = await req.json();
  const userId = req.headers.get("Authorization");

  try {
    const data = bookmarkSchema.safeParse({ url: link, userId });
    if (data.error) {
      throw new ZodError(data.error.errors);
    }

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const user = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.id, userId),
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isActiveSession = await db.query.sessions.findFirst({
      where: (session, { eq }) => eq(session.userId, user.id),
    });

    if (!isActiveSession) {
      throw new Error("User not authenticated");
    }

    const metaData = await fetch(`https://api.dub.co/metatags?url=${link}`);
    const meta = await metaData.json();

    // Create a new bookmark
    const bookmark = await db
      .insert(bookmarks)
      .values({
        url: link,
        userId: user.id,
        title: meta.title,
        description: meta.description,
        image: meta.image,
      })
      .returning();

    // Send response

    return Response.json(
      {
        message: "Bookmark created",
        bookmark,
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        {
          message: error.message,
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        error: error || "Something went wrong",
      },
      {
        status: 400,
      }
    );
  }
}

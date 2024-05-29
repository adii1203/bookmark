"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { bookmarkSchema } from "@/lib/zod/schema/url";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function AddBookmarModal({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const createBookmark = async (url: string) => {
    const parseData = bookmarkSchema.safeParse({ url, userId });
    if (parseData.error) {
      toast.error(parseData.error.errors[0].message);
      return;
    }

    const res = await fetch("/api/bookmark/create", {
      method: "POST",
      headers: {
        Authorization: `${userId}`,
      },
      body: JSON.stringify({ link: url }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      setIsOpen(false);
    } else {
      toast.error(data.message);
    }
  };

  const { mutate, isError, isPending } = useMutation({
    mutationFn: createBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["link"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen);
      }}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Add Bookmark</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Bookmark</DialogTitle>
          <DialogDescription>
            Add a new bookmark to your collection.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Label>
            <span>Bookmark URL</span>
          </Label>
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
          />

          <Button
            disabled={isPending}
            onClick={() => mutate(url)}
            type="button">
            {isPending ? "Adding..." : "Add Bookmark"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddBookmarModal;

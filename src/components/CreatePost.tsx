import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { addThread } from "../api/action";
import { IThread } from "../types/client";
import useAuth from "../hooks/useAuth";

export default function CreatePost({
  setThreads,
  threads,
}: {
  setThreads: (e: IThread[]) => void;
  threads: IThread[];
}) {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const { auth } = useAuth();

  const handleThread = async () => {
    const thread = await addThread(content);
    if (thread) {
      setContent("");
      setOpen(false);
      setThreads([thread, ...threads]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <div className="flex p-6 border-b justify-between">
          <div className="flex gap-3 text-foreground/40 items-center">
            <img
              src={auth?.profilePicture}
              alt="profile image"
              className="w-10 rounded-full p-1 border"
            />
            <span>Start a thread...</span>
          </div>
          <Button className="font-bold" variant={"outline"}>
            Post
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="absolute -top-1/3 left-1/2 -translate-x-1/2 text-2xl">
            New Thread
          </DialogTitle>
          <DialogDescription>
            <div className="flex w-full">
              <div className="flex text-foreground/40 items-center w-full gap-5 text-lg">
                <img
                  src={auth?.profilePicture}
                  alt="profile image"
                  className=" w-14 rounded-full p-1 border"
                />
                <div className="flex justify-center flex-col w-full">
                  <span className="text-foreground font-bold">
                    {auth?.username}
                  </span>
                  <textarea
                    name=""
                    id=""
                    className="bg-card focus-visible:outline-none w-full box-border resize-none text-white"
                    placeholder="Start a thread..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="image"></div>
            <Button
              className="font-bold mt-10 text-xl"
              variant={"outline"}
              onClick={handleThread}
            >
              Post
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

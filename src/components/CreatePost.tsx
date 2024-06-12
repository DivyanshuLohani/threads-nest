import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function CreatePost() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex p-6 border-b justify-between">
          <div className="flex gap-3 text-foreground/40 items-center">
            <img
              src="https://randomuser.me/api/portraits/women/43.jpg"
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
          <DialogTitle>New Thread</DialogTitle>
          <DialogDescription>
            <div className="flex w-full">
              <div className="flex text-foreground/40 items-center w-full gap-2">
                <img
                  src="https://randomuser.me/api/portraits/women/43.jpg"
                  alt="profile image"
                  className=" w-14 rounded-full p-1 border"
                />
                <div className="flex justify-center flex-col w-full">
                  <span className="text-foreground font-bold">Username</span>
                  <textarea
                    name=""
                    id=""
                    className="bg-card focus-visible:outline-none w-full box-border resize-none text-white"
                    placeholder="Start a thread..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="image"></div>
            <Button className="font-bold mt-10" variant={"outline"}>
              Post
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

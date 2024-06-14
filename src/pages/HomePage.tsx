import { useState, useEffect } from "react";
import { getuserPosts } from "../api/data";
import CreatePost from "../components/CreatePost";
// import TopBar from "../components/Topbar";
import { ScrollArea } from "../components/ui/scroll-area";
import { IThread } from "../types/client";
import Post from "../components/Post";

export default function HomePage() {
  const [threads, setThreads] = useState<Array<IThread>>([]);

  useEffect(() => {
    getuserPosts().then((e) => {
      setThreads(e);
    });
  }, []);

  return (
    <main className=" dark:bg-background dark:text-white w-screen h-screen flex justify-center  flex-col items-center">
      {/* <TopBar /> Dummy for now */}
      <ScrollArea className="flex flex-col py-2 px-1 min-h-screen w-full md:w-3/6 rounded-t-3xl border bg-secondary/30 overflow-x-hidden">
        <CreatePost setThreads={setThreads} threads={threads} />
        {threads.map((e) => {
          return <Post thread={e} key={e._id} />;
        })}
      </ScrollArea>
    </main>
  );
}

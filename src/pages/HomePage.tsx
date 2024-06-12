import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
// import TopBar from "../components/Topbar";
import { ScrollArea } from "../components/ui/scroll-area";

export default function HomePage() {
  return (
    <main className=" dark:bg-background dark:text-white w-screen h-screen flex justify-center  flex-col items-center">
      <Navbar />
      {/* <TopBar /> Dummy for now */}
      <ScrollArea className="flex flex-col py-2 px-1 min-h-screen w-full md:w-3/6 rounded-t-3xl border bg-secondary/30 overflow-x-hidden">
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollArea>
    </main>
  );
}

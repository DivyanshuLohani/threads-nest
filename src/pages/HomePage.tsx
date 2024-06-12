// import CreatePost from "../components/CreatePost";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";

export default function HomePage() {
  return (
    <main className=" dark:bg-background dark:text-white w-screen h-screen flex justify-center  flex-col items-center">
      <Navbar />
      <TopBar /> {/* Dummy for now */}
      <div className="flex flex-col py-2 px-1 h-screen w-full md:w-3/6 rounded-t-3xl border bg-secondary/30">
        <CreatePost />
      </div>
    </main>
  );
}

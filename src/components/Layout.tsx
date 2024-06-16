import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ScrollArea } from "./ui/scroll-area";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <main className=" dark:bg-background dark:text-white w-screen h-screen flex justify-center  flex-col items-center">
        <ScrollArea className="flex flex-col py-2 px-1 min-h-screen w-full md:w-3/6 rounded-t-3xl border bg-secondary/30 overflow-x-hidden">
          <Outlet />
        </ScrollArea>
      </main>
    </main>
  );
}

import { useState, useEffect } from "react";
import { getuserPosts } from "../api/data";
import CreatePost from "../components/CreatePost";
// import TopBar from "../components/Topbar";
import { IThread } from "../types/client";
import Post from "../components/Post";
import SkeletonPost from "../components/ui/skeletonpost";

export default function HomePage() {
  const [threads, setThreads] = useState<Array<IThread>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getuserPosts().then((e) => {
      setThreads(e);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CreatePost setThreads={setThreads} threads={threads} />
      {loading && (
        <>
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
        </>
      )}
      {threads.map((e) => {
        return <Post thread={e} key={e._id} />;
      })}
    </>
  );
}

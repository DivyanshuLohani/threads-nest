import { ScrollArea } from "@radix-ui/react-scroll-area";
import UserInfo from "../components/account/UserInfo";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { getUserDataWithUsername } from "../api/data";
import { useParams } from "react-router-dom";
import { IThreadProfile } from "../types/client";
import useAuth from "../hooks/useAuth";
import { followUser, unfollowUser } from "../api/action";

export default function AccountPage() {
  const [user, setUser] = useState<IThreadProfile | null>(null);
  const [followed, setFollowed] = useState(false);
  const { auth } = useAuth();
  const params = useParams();

  useEffect(() => {
    getUserDataWithUsername(params.username ?? "").then((u) => {
      if (u) {
        setUser(u);
        if (u.followed) setFollowed(true);
      }
    });
  }, [params.username]);

  const handleFollow = async () => {
    if (followed) {
      await unfollowUser(params.username ?? "");
      setFollowed(false);
    } else {
      await followUser(params.username ?? "");
      setFollowed(true);
    }
  };

  return (
    <main className=" dark:bg-background dark:text-white w-screen h-screen flex justify-center  flex-col items-center">
      <ScrollArea className="flex flex-col py-2 px-1 min-h-screen w-full md:w-3/6 rounded-t-3xl border bg-secondary/30 overflow-x-hidden">
        {user && <UserInfo user={user} />}
        <div className="px-6">
          {auth?.username === params.username ? (
            <Button className="w-full font-bold" variant={"outline"}>
              Edit Profile
            </Button>
          ) : !followed ? (
            <Button className="w-full font-bold" onClick={handleFollow}>
              Follow
            </Button>
          ) : (
            <Button
              className="w-full font-bold"
              onClick={handleFollow}
              variant={"outline"}
            >
              Following
            </Button>
          )}
        </div>
      </ScrollArea>
    </main>
  );
}

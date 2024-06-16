import UserInfo from "../components/account/UserInfo";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { getUserDataWithUsername } from "../api/data";
import { useParams } from "react-router-dom";
import { IThreadProfile } from "../types/client";
import useAuth from "../hooks/useAuth";
import { followUser, unfollowUser } from "../api/action";
import EditProfile from "../components/account/EditProfile";

export default function AccountPage() {
  const [user, setUser] = useState<IThreadProfile | null>(null);
  const [followed, setFollowed] = useState(false);
  const { auth } = useAuth();
  const params = useParams();

  useEffect(() => {
    if (params.username === auth?.username) {
      setUser({
        fullName: auth?.fullName || "",
        bio: auth?.bio || "",
        username: auth?.username || "",
        profilePicture: auth?.profilePicture ?? "",
        followed: false,
        followersCount: 0,
        followingCount: 0,
      });
    } else
      getUserDataWithUsername(params.username ?? "").then((u) => {
        if (u) {
          setUser(u);
          if (u.followed) setFollowed(true);
        }
      });
  }, [params.username, auth]);

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
    <>
      {user && <UserInfo user={user} />}
      <div className="px-6">
        {auth?.username === params.username ? (
          <EditProfile />
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
    </>
  );
}

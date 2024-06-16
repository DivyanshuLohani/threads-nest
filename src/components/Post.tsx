import { FaRegPaperPlane, FaRegHeart, FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IThread } from "../types/client";
import { timeAgo } from "../lib/utils";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UserProfileUsername } from "./UserProfileUsername";

export default function Post({ thread }: { thread: IThread }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(thread.likesCount);

  useEffect(() => {
    if (liked) setLikes((l) => l + 1);
    else setLikes((l) => Math.max(l - 1, 0));
  }, [liked]);

  const handleLike = async () => {
    setLiked(!liked);
  };

  // useEffect(() => {
  //   if (thread.)
  // }, [thread])

  return (
    <div className="flex p-5 gap-3">
      <div className="">
        <img
          src={thread.user.profilePicture}
          alt="profile image"
          className=" w-14 rounded-full p-1 border"
          draggable={false}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <Link
            to={`/${thread.user.username}`}
            className="font-bold hover:underline cursor-pointer"
          >
            <UserProfileUsername user={thread.user} />
          </Link>
          <span className="text-foreground/30">
            {timeAgo(thread.createdAt)}
          </span>
        </div>

        <div className="content">
          <span>{thread.content}</span>
        </div>
        {/* <div className="object-contain">
          <img
            src="https://images.unsplash.com/photo-1718039006696-b653fe660e3e?q=80&w=1434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div> */}

        <div className="mt-10 w-full text-2xl text-foreground/60  justify-self-end">
          <ul className="flex gap-3 w-full -ml-3">
            <li
              className="hover:text-primary cursor-pointer px-3 py-2 flex items-center justify-center rounded-lg  hover:bg-foreground/10 transition-colors duration-300"
              onClick={() => {
                handleLike();
              }}
            >
              {liked ? <FaHeart className="text-red-900" /> : <FaRegHeart />}
              <span className="text-lg ml-1">{likes}</span>
            </li>
            <li className="hover:text-primary cursor-pointer px-3  py-2 flex items-center justify-center rounded-lg hover:bg-foreground/10 transition-colors duration-300">
              <FaRegComment />
              <span className="text-lg ml-1">{thread.reThreadsCount}</span>
            </li>
            <li className="hover:text-primary cursor-pointer px-3 py-2 flex items-center justify-center rounded-lg  hover:bg-foreground/10 transition-colors duration-300">
              <BiRepost />
              {/* <span className="text-lg ml-1">10</span> */}
            </li>
            <li className="hover:text-primary cursor-pointer px-3 py-2 flex items-center justify-center rounded-lg  hover:bg-foreground/10 transition-colors duration-300">
              <FaRegPaperPlane />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

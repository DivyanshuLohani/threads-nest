import { IThreadUser } from "../../types/client";

export default function UserInfo({ user }: { user: IThreadUser }) {
  return (
    <div className="flex justify-between p-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{user.fullName}</span>
          <span>{user.username}</span>
        </div>
        <div>{user.bio}</div>
      </div>

      <div className="rounded-full">
        <img
          src={user.profilePicture}
          className="w-32 rounded-full p-1 border"
          draggable={false}
          alt=""
        />
      </div>
    </div>
  );
}

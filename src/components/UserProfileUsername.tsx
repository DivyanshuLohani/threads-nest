import { IThreadUser } from "../types/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

export function UserProfileUsername({ user }: { user: IThreadUser }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="w-full text-left p-0">
          {user.username}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={user.profilePicture} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-lg font-bold">{user.fullName}</h2>
            <h4 className="text-sm font-semibold">{user.username}</h4>
            <p className="text-sm font-normal">{user.bio}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

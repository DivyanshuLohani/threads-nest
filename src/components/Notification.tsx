import { timeAgo } from "../lib/utils";
import { INotification, getEventMessage } from "../types/client";

export default function Notification({
  notification,
}: {
  notification: INotification;
}) {
  return (
    <div className="flex gap-x-3">
      <img
        src={notification.targetDetails.profilePicture}
        className="w-14 rounded-full p-1 border"
        draggable={false}
        alt=""
      />

      <div className="flex border-b w-full pb-2">
        <div className="flex flex-col justify-between w-full">
          <span className="text-lg font-bold">
            {notification.targetDetails.username}
            <span className="text-foreground/60 font-normal ml-3 text-sm">
              {timeAgo(notification.createdAt)}
            </span>{" "}
          </span>
          <span className="text-foreground/60">
            {getEventMessage(notification.event)}
          </span>
        </div>
        {/* <Button>Follow</Button> */}
      </div>
    </div>
  );
}

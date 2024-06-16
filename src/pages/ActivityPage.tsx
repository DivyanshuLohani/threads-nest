import { useEffect, useState } from "react";
import Notification from "../components/Notification";
import { getNotifications } from "../api/data";
import { INotification } from "../types/client";

export default function ActivityPage() {
  const [notifications, setNotications] = useState<INotification[]>([]);

  useEffect(() => {
    getNotifications().then((res) => setNotications(res));
  }, []);

  return (
    <div className="p-5">
      {notifications.map((e) => (
        <Notification notification={e} key={e._id} />
      ))}
    </div>
  );
}

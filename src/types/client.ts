export interface IThreadUser {
  bio: string;
  followersCount: number;
  followingCount: number;
  fullName: string;
  profilePicture: string;
  username: string;
}

export interface IThreadProfile extends IThreadUser {
  followed: boolean;
}

export interface IThread {
  _id: string;
  content: string;
  user: IThreadUser;
  images?: string[];
  likesCount: number;
  reThreadsCount: number;
  createdAt: Date;
}

export interface INotification {
  _id: string;
  event: string;
  userDetails: IThreadProfile;
  targetDetails: IThreadProfile;
  read: boolean;
  createdAt: Date;
}

const eventMessage = {
  follow: "Started following you",
  like: "Liked your post",
  comment: "Commented on your post",
};

// Function to get the message based on event type
export function getEventMessage(eventType: string): string | undefined {
  return eventMessage[eventType as keyof typeof eventMessage];
}

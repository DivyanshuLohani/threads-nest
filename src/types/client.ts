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

import { IThreadProfile } from "../types/client";
import api from "./api";

export async function getUserData() {
  try {
    const response = await api.get("/auth/user/");
    return response.data;
  } catch (e) {
    return [];
  }
}

export async function getuserPosts() {
  try {
    const response = await api.get("/threads/");
    return response.data;
  } catch (e) {
    return null;
  }
}

export async function getUserDataWithUsername(
  username: string
): Promise<IThreadProfile | null> {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch {
    return null;
  }
}

export async function getNotifications() {
  try {
    const response = await api.get("/users/notifications/");
    return response.data;
  } catch {
    return [];
  }
}

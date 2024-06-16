import api from "./api";

export async function loginUser(identifier: string, password: string) {
  try {
    const response = await api.post("/auth/login", {
      email: identifier,
      password,
    });
    const { access, refresh } = response.data as {
      access: string;
      refresh: string;
    };

    sessionStorage.setItem("access", access);
    sessionStorage.setItem("refresh", refresh);
  } catch (e) {
    console.log("Error logging in user", e);
    sessionStorage.clear();
  }
}

export async function addThread(content: string, img?: string) {
  try {
    const response = await api.post("/threads/", {
      content,
      img,
    });
    console.log(response);
    return response.data;
  } catch (e) {
    return null;
  }
}

export async function followUser(username: string) {
  await api.put(`/users/${username}/follow/`);
}

export async function unfollowUser(username: string) {
  await api.delete(`/users/${username}/follow/`);
}

export async function updateUser(
  username: string,
  fullName: string,
  bio: string,
  profilePicture: string
) {
  try {
    const response = await api.patch("/users/update/", {
      username,
      fullName,
      bio,
      profilePicture,
    });
    return response.data;
  } catch {
    return null;
  }
}

import api from "./api";

export async function getUserData() {
  try {
    const response = await api.get("/auth/user/");
    return response.data;
  } catch (e) {
    return null;
  }
}

import apiClient from "../lib/apt-client-sp"

export async function fetchUsers() {
  try {
    const res = await apiClient.get("/security/users");
    return res;
  } catch (e) {
    console.error("Fetch users error:", e);
    return [];
  }
}


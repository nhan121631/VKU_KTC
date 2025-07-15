export const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyNTYzMjg4LCJleHAiOjE3ODQxMjA4ODh9.5cFCHZ9q47I_JreSiBpg7UKQ_mbstBeMtZkt60vtlYc`,
}
export const baseUrl = "https://server.aptech.io";

export const fetchTask = async ()=>{
    const response = await fetch(`${baseUrl}/workspaces/tasks`, {
        method: 'GET',
        headers: defaultHeaders,
    });
    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }
    return response.json();
}

export const fetchTaskById = async (id: number, options?: RequestInit) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: 'GET',
    headers: defaultHeaders,
    ...options,
  });
    if (!response.ok) {
        throw new Error(`Failed to fetch task with id ${id}`);
    }
    const data = await response.json();
    return data;
}
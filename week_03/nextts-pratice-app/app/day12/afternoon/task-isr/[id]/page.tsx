import React from "react";
import { fetchTask, fetchTaskById } from "../../services";

export const dynamic = "force-static";
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const tasks = await fetchTask();
  if (!tasks || !Array.isArray(tasks)) {
    return [];
  }
  return tasks.slice(0, 10).map((task) => ({
    id: task.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const task = await fetchTaskById(id, {
    next: {
      revalidate: 60,
    },
  });

  if (!task) {
    return <div className="text-red-600 text-center mt-10">Task not found</div>;
  }
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-3xl font-extrabold text-[#2980b9] mb-6 text-center">
        Task Details
      </h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <span className="font-semibold text-gray-600">Task ID:</span>{" "}
          {task.id}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Title:</span>{" "}
          {task.title}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Description:</span>{" "}
          {task.description}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Status:</span>{" "}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              task.status === "to_do"
                ? "bg-blue-100 text-blue-800"
                : task.status === "in_progress"
                ? "bg-yellow-100 text-yellow-800"
                : task.status === "done"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {task.status}
          </span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Priority:</span>{" "}
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              task.priority === "high"
                ? "bg-red-100 text-red-800"
                : task.priority === "medium"
                ? "bg-yellow-100 text-yellow-800"
                : task.priority === "low"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {task.priority}
          </span>
        </div>
        <div>
          <span className="font-semibold text-gray-600">Start Date:</span>{" "}
          {task.start_date
            ? new Date(task.start_date).toLocaleDateString()
            : ""}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Due Date:</span>{" "}
          {task.due_date ? new Date(task.due_date).toLocaleDateString() : ""}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Assigned To:</span>{" "}
          {task.assignee_id ?? ""}
        </div>
      </div>
    </div>
  );
}

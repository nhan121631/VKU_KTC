import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <header className="w-60 bg-gray-100 p-6 flex flex-col min-h-screen">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        <Link
          href="/day12/afternoon/task-ssr"
          className="px-4 py-2 rounded hover:bg-sky-400 transition"
        >
          Task-SSR
        </Link>
        <Link
          href="/day12/afternoon/task-ssg"
          className="px-4 py-2 rounded hover:bg-sky-400 transition"
        >
          Task-SSG
        </Link>
        <Link
          href="/day12/afternoon/task-csr"
          className="px-4 py-2 rounded hover:bg-sky-400 transition"
        >
          Task-CSR
        </Link>
      </header>
      {/* Main content */}
      <main className="flex w-full justify-center">{children}</main>
    </div>
  );
}

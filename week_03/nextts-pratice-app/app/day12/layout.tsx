import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex justify-between items-center bg-sky-500 text-white p-4 text-center h-16 z-10 fixed top-0 left-0 w-full">
        <h1 className="text-2xl font-bold">Day 12</h1>
        <nav className="flex justify-center gap-4">
          <a
            href="/day12/homework"
            className="px-4 py-2 rounded hover:bg-sky-700 transition"
          >
            Homework
          </a>
          <Link
            href="/day12/afternoon"
            className="px-4 py-2 rounded hover:bg-sky-700 transition"
          >
            Afternoon
          </Link>
        </nav>
      </header>
      <div className="rounded-lg shadow-md pt-15 flex-1">{children}</div>
    </div>
  );
}
//texxt
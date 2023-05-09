"use client";
import Image from "next/image";
import Link from "next/link";
import database from "@/app/database";

export default async function Home() {
  const onSyncButtonClick = async () => {};

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-4">
      <div className="flex space-x-8 justify-between items-center">
        <h1 className="text-3xl font-bold drop-shadow-md">
          Welcome to the r2o food delivery service integration.
        </h1>

        <button
          onClick={onSyncButtonClick}
          className="px-4 py-2 bg-pink-500 hover:bg-pink-400 text-pink-50 rounded-md"
        >
          Sync with foodora
        </button>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold drop-shadow">Orders list:</h2>
      </div>
    </main>
  );
}

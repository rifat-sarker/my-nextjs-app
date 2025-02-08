import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-blue-500">
      <div className="flex  justify-center flex-col space-y-4 p-4">
        <h1>My Sidebar</h1>
        <Link className="hover:bg-pink-400 px-6 py-2 rounded-md" href="/">
          Home
        </Link>
        <Link
          className="hover:bg-pink-400 px-6 py-2 rounded-md"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className="hover:bg-pink-400 px-6 py-2 rounded-md"
          href="/settings"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

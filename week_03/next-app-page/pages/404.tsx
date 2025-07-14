import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#6dd5fa] to-[#2980b9]">
      <h1 className="text-8xl font-extrabold text-white drop-shadow-lg mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold text-white mb-2">
        Oops! Page not found
      </h2>
      <p className="text-lg text-white mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-[#2980b9] rounded-full font-semibold shadow hover:bg-[#6dd5fa] hover:text-white transition"
      >
        Go Home
      </Link>
    </div>
  );
}

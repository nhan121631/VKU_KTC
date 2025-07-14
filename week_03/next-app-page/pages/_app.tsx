import { Geist, Geist_Mono } from "next/font/google";
import type { AppProps } from "next/app";
import Link from "next/link";
import "../styles/globals.css"; // Đảm bảo đã import Tailwind hoặc CSS của bạn

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#373b44] to-[#4286f4] shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-white drop-shadow">
          My Next App
        </div>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-white font-medium hover:text-[#6dd5fa] transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-white font-medium hover:text-[#6dd5fa] transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white font-medium hover:text-[#6dd5fa] transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white font-medium hover:text-[#6dd5fa] transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-white font-medium hover:text-[#6dd5fa] transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen`}
    >
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

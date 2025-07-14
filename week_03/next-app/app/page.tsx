import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full justify-center mt-20 flex-col items-center">
      <span className="text-6xl font-semibold">Hello world </span>
      <Image
        src="/images/bg.webp"
        alt="Background"
        width={400}
        height={250}
        className="my-4"
        priority
      />
      <Link href="/blog" className="ml-4 text-blue-500 text-2xl">
        Go to Blog
      </Link>
    </div>
  );
}

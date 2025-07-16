import React from "react";
import Banner from "./components/Banner";
import { HeaderTop } from "./components/HeaderTop";
import { HeaderBottom } from "./components/HeadetBottom";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <HeaderTop />
      <HeaderBottom />
      <div className="mt-5 flex justify-center items-center rounded-2xl">
        <Image
          src="/images/ads.png"
          alt="Banner"
          width={1200}
          height={200}
          className="object-cover rounded-xl"
          priority
        />
      </div>
      <div className="rounded-lg shadow-md mt-10 flex-1 min-h-screen">
        {children}
      </div>
    </div>
  );
}

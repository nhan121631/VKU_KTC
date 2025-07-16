import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex w-full justify-center overflow-hidden bg-[#85E3FF]">
      <Image
        src="/images/header.png"
        alt="Banner"
        width={1200}
        height={44}
        className="object-cover"
        priority
      />
    </div>
  );
}

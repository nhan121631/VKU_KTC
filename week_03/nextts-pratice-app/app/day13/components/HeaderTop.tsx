import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

export function HeaderTop() {
  return (
    <div className="flex justify-center bg-[#FFD500] p-2 sticky top-0 w-full z-50">
      <div className="">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={250}
          height={40}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex hover bg-white mx-2 rounded-3xl px-2">
        <div className="flex font-semibold text-xl items-center  justify-center text-gray-500">
          <IoSearchOutline />
        </div>
        <div className="flex items-center h-10">
          <input
            type="text"
            placeholder="Bạn tìm gì..."
            className="w-96 h-full text-xs px-4 text-gray-600 focus:outline-none leading-[14px]"
          />
        </div>
      </div>
      <div className="flex hover:bg-white/60 mx-2 rounded-3xl px-2 gap-x-2 items-center">
        <div className="flex text-2xl items-center  justify-center">
          <VscAccount />
        </div>
        <div className="flex items-center h-10 text-sm">
          <span>Đăng nhập</span>
        </div>
      </div>

      <div className="flex hover:bg-white/60 mx-2 rounded-3xl px-2 gap-x-2 items-center">
        <div className="flex text-2xl items-center  justify-center">
          <IoCartOutline />
        </div>
        <div className="flex items-center h-10 text-sm">
          <span>Giỏ hàng</span>
        </div>
      </div>

      <div className="flex bg-white/30 hover:bg-white/60 mx-2 rounded-3xl px-2 gap-x-2 items-center justify-between w-[250px]">
        <div className="flex items-center  justify-center gap-2">
          <div className="flex text-2xl items-center  justify-center">
            <FiMapPin />
          </div>
          <div className="flex items-center h-10 text-sm">
            <span>Hồ Chí Minh</span>
          </div>
        </div>
        <div>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
}

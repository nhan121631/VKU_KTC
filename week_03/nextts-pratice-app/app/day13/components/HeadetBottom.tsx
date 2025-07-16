import {
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoHeadsetOutline,
  IoWatchOutline,
  IoTimeOutline,
  IoTabletLandscapeOutline,
  IoRefreshOutline,
  IoDesktopOutline,
  IoCardOutline,
  IoConstructOutline,
} from "react-icons/io5";

export function HeaderBottom() {
  return (
    <div className="flex justify-center bg-[#FFD500]">
      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoPhonePortraitOutline />
        <span className="text-sm">Điện thoại</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoLaptopOutline />
        <span className="text-sm">Lap top</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoHeadsetOutline />
        <span className="text-sm">Phụ kiện</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoWatchOutline />
        <span className="text-sm">Smart watch</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoTimeOutline />
        <span className="text-sm">Đồng hồ</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoTabletLandscapeOutline />
        <span className="text-sm">Tablet</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoRefreshOutline />
        <span className="text-sm">Máy cũ, Thu cũ</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoDesktopOutline />
        <span className="text-sm">Màn hình, Máy in</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoCardOutline />
        <span className="text-sm">Sim, Thẻ cào</span>
      </div>

      <div className="flex items-center gap-2 hover:bg-white/60 p-3 rounded-t-2xl">
        <IoConstructOutline />
        <span className="text-sm">Dịch vụ tiện ích</span>
      </div>
    </div>
  );
}

import { useState } from "react";

export const TestMapPage = () => {
  const [address, setAddress] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  const handleShowMap = () => {
    if (!address) return;
    // Sử dụng Google Maps Static API để hiển thị bản đồ
    const url = `https://maps.google.com/maps?q=${encodeURIComponent(
      address
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    setMapUrl(url);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Nhập địa chỉ để xem bản đồ</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Nhập địa chỉ..."
        style={{ width: "80%", padding: 8, marginRight: 8 }}
      />
      <button onClick={handleShowMap} style={{ padding: 8 }}>
        Xem bản đồ
      </button>
      {mapUrl && (
        <div style={{ marginTop: 20 }}>
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            src={mapUrl}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

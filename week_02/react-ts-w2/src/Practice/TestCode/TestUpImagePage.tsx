import React, { useState } from "react";

export const TestUpImagePage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);

      // Tạo preview cho từng ảnh
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setPreviews(previewUrls);
    }
  };

  const handleUpload = async () => {
    if (images.length === 0) return alert("Chọn ít nhất một ảnh!");

    const formData = new FormData();
    images.forEach((img, idx) => {
      formData.append("images", img);
    });

    // Gửi formData lên server (ví dụ endpoint /api/upload)
    // await fetch("/api/upload", { method: "POST", body: formData });

    alert("Đã gửi dữ liệu lên server (demo, chưa thực sự upload)!");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Upload nhiều hình ảnh</h2>
      <input type="file" multiple accept="image/*" onChange={handleChange} />
      <div
        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}
      >
        {previews.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`preview-${idx}`}
            style={{
              width: 120,
              height: 120,
              objectFit: "cover",
              borderRadius: 8,
              border: "1px solid #ccc",
            }}
          />
        ))}
      </div>
      <button
        onClick={handleUpload}
        style={{ marginTop: 16, padding: "8px 16px" }}
      >
        Upload
      </button>
    </div>
  );
};

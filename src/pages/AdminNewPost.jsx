import { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AdminNewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");

  const CLOUD_NAME = "dbe4pyqz1";
  const UPLOAD_PRESET = "blog_preset";

  const createSlug = (text) =>
    text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  // ⭐ Upload image to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImageURL(data.secure_url); // cloudinary image url
    alert("Image uploaded successfully!");
  };

  const handlePublish = async () => {
    if (!auth.currentUser) return alert("You must be logged in!");

    const slug = createSlug(title);

    await addDoc(collection(db, "blogs"), {
      title,
      slug,
      content,
      image: imageURL || null,
      createdAt: serverTimestamp(),
    });

    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">New Blog Post</h1>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 border rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* CONTENT */}
        <textarea
          placeholder="Blog content..."
          className="w-full p-3 border rounded mb-4 h-64"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {/* IMAGE UPLOAD */}
        <div className="border p-4 rounded mb-4">
          <label className="block mb-2 font-semibold">Upload Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4"
          />

          {imageURL && (
            <div>
              <p className="text-green-500 mb-2">Image uploaded!</p>
              <img
                src={imageURL}
                className="w-48 rounded-lg"
                alt="Uploaded preview"
              />
            </div>
          )}
        </div>

        {/* PUBLISH BUTTON */}
        <button
          onClick={handlePublish}
          className="bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
}

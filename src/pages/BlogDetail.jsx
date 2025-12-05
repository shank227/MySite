import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));
      const blogs = snapshot.docs.map((doc) => doc.data());
      const found = blogs.find((b) => b.slug === slug);
      setBlog(found);
    };
    loadBlog();
  }, [slug]);

  if (!blog) return <p className="p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navbar />

      <div className="max-w-3xl mx-auto p-10 text-left">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-6">
          {new Date(blog.createdAt?.seconds * 1000).toDateString()}
        </p>

        {blog.image && (
          <img
            src={blog.image}
            alt="Blog Featured"
            className="w-full rounded-lg mb-6 shadow"
          />
        )}

        <article className="leading-7 whitespace-pre-line">
          {blog.content}
        </article>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));
      const list = snapshot.docs.map((doc) => doc.data());
      setBlogs(list);
    };
    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navbar />

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Insights</h2>

          <div className="grid gap-6">
            {blogs.map((blog, idx) => (
              <article
                key={idx}
                className="p-6 border rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(blog.createdAt?.seconds * 1000).toDateString()}
                </p>

                <p className="mb-4">{blog.content.slice(0, 120)}...</p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

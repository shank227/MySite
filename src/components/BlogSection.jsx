// src/components/BlogSection.jsx
import { dummyBlogs } from "../data/dummyBlogs";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <section id="Blog" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Blog Posts</h2>

        <div className="grid gap-6">
          {dummyBlogs.map((blog) => (
            <article
              key={blog.id}
              className="p-6 border rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

              <p className="mb-4">
                {blog.content.slice(0, 180)}...
              </p>

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
  );
}

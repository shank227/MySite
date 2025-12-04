// src/pages/BlogDetail.jsx
import { useParams } from "react-router-dom";
import { dummyBlogs } from "../data/dummyBlogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = dummyBlogs.find((b) => b.slug === slug);

  if (!blog) return <p className="p-10">Blog not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-10 text-left">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>

      <article className="leading-7 whitespace-pre-line">
        {blog.content}
      </article>
    </div>
  );
}

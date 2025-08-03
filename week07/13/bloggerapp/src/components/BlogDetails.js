import React from "react";

const blogs = [
  { id: 1, title: "React Hooks Overview", date: "2024-01-10" },
  { id: 2, title: "Understanding JSX", date: "2024-02-15" }
];

function BlogDetails() {
  return (
    <div>
      <h2>📝 Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <b>{blog.title}</b> — {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;

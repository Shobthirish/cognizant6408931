import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [selected, setSelected] = useState("book");

  const renderComponent = () => {
    if (selected === "book") return <BookDetails />;
    else if (selected === "blog") return <BlogDetails />;
    else if (selected === "course") return <CourseDetails />;
    else return <p>Select a section above.</p>;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📘 Blogger App</h1>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setSelected("book")}>Book Details</button>
        <button onClick={() => setSelected("blog")}>Blog Details</button>
        <button onClick={() => setSelected("course")}>Course Details</button>
      </div>
      {renderComponent()}
    </div>
  );
}

export default App;

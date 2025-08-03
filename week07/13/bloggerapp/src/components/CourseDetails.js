import React from "react";

const courses = [
  { id: 1, name: "React Basics", level: "Beginner" },
  { id: 2, name: "Advanced React", level: "Advanced" }
];

function CourseDetails() {
  return (
    <div>
      <h2>🎓 Course Catalog</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <b>{course.name}</b> — {course.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;

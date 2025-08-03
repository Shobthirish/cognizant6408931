import React from "react";

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" }
];

function BookDetails() {
  return (
    <div>
      <h2>📚 Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <b>{book.title}</b> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
